import React, { useState, useEffect } from 'react';
import {
  allTransactionColumns,
  allTransactions,
  valueToDoubleTheRewards,
  minValueForRewards,
  rewardsColums,
} from '../Static/data';
import DataGridDisplay from './DataGridDisplay';

function RewardsPerTransaction() {
  const [transactionData, setTransactionData] = useState(allTransactions);
  const [customerRewardsByMonth, setCustomerRewardsByMonth] = useState([]);
  const [totalRewards, setTotalRewards] = React.useState(0);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  useEffect(() => {
    const results = calculateResults();
    setTransactionData(results);
    const rewards = calculateCustomerRewardsByMonth();
    setCustomerRewardsByMonth(rewards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Calculate the rewards for each transaction
  function calculateResults() {
    allTransactions &&
      allTransactions.map(transaction => {
        if (transaction.amtSpend > valueToDoubleTheRewards) {
          return (transaction.rewardsEarned =
            (transaction.amtSpend - valueToDoubleTheRewards) * 2 +
            minValueForRewards);
        } else if (
          transaction.amtSpend <= valueToDoubleTheRewards &&
          transaction.amtSpend > minValueForRewards
        ) {
          return (transaction.rewardsEarned =
            transaction.amtSpend - minValueForRewards);
        } else {
          return (transaction.rewardsEarned = 0);
        }
      });
    return allTransactions;
  }

  // Calculate the rewards for each customer per month
  function calculateCustomerRewardsByMonth() {
    let customer = {};
    transactionData &&
      transactionData.forEach(transaction => {
        const { clientId, clientName, transactionDate, rewardsEarned } =
          transaction;
        const month = new Date(transactionDate).getMonth();
        if (!customer[clientId]) {
          customer[clientId] = [];
        }
        if (customer[clientId][month]) {
          customer[clientId][month].rewardsEarned += rewardsEarned;
          customer[clientId][month].month = months[month];
          customer[clientId][month].numTransactions++;
        } else {
          customer[clientId][month] = {
            clientId,
            clientName,
            month: months[month],
            numTransactions: 1,
            rewardsEarned,
          };
        }
      });
    let total = [];
    let id = 0;
    for (var custKey in customer) {
      customer[custKey].forEach(cRow => {
        cRow.id = ++id;
        total.push(cRow);
      });
    }
    return total;
  }

  return (
    <>
      <DataGridDisplay
        row={transactionData}
        column={allTransactionColumns}
        showFooter={false}
        header={<p>All Transactions with Rewards Earned</p>}
        ariaLabel="All Transactions with Rewards Earned"
      />
      <DataGridDisplay
        row={customerRewardsByMonth}
        column={rewardsColums}
        showFooter={true}
        header={<p>Monthly Rewards per Customer</p>}
        ariaLabel="Monthly Rewards per Customer"
        total={totalRewards}
        setTotal={setTotalRewards}
      />
    </>
  );
}

export default RewardsPerTransaction;
