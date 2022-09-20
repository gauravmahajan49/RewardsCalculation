export const allTransactionColumns = [
  {
    field: 'clientName',
    headerName: 'Name',
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'transactionDate',
    headerName: 'Date Of Purchase',
    width: 200,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'amtSpend',
    headerName: 'Total Amount',
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'rewardsEarned',
    headerName: 'Points Earned',
    width: 200,
    align: 'center',
    headerAlign: 'center',
  },
];

export const allTransactions = [
  {
    id: 1,
    clientId: 1,
    clientName: 'Salman',
    amtSpend: 90,
    transactionDate: '09-01-2022',
    rewardsEarned: 0,
  },
  {
    id: 2,
    clientId: 2,
    clientName: 'Mohan',
    amtSpend: 120,
    transactionDate: '09-01-2022',
    rewardsEarned: 0,
  },
  {
    id: 3,
    clientId: 1,
    clientName: 'Salman',
    amtSpend: 90,
    transactionDate: '08-01-2022',
    rewardsEarned: 0,
  },
  {
    id: 4,
    clientId: 2,
    clientName: 'Mohan',
    amtSpend: 120,
    transactionDate: '08-02-2022',
    rewardsEarned: 0,
  },
  {
    id: 5,
    clientId: 1,
    clientName: 'Salman',
    amtSpend: 120,
    transactionDate: '07-01-2022',
    rewardsEarned: 0,
  },
  {
    id: 6,
    clientId: 2,
    clientName: 'Mohan',
    amtSpend: 120,
    transactionDate: '07-02-2022',
    rewardsEarned: 0,
  },
  {
    id: 7,
    clientId: 2,
    clientName: 'Mohan',
    amtSpend: 120,
    transactionDate: '07-06-2022',
    rewardsEarned: 0,
  },
  {
    id: 8,
    clientId: 1,
    clientName: 'Salman',
    amtSpend: 70,
    transactionDate: '07-06-2022',
    rewardsEarned: 0,
  },
];

export const rewardsColums = [
  {
    field: 'clientName',
    headerName: 'Name',
    align: 'center',
    headerAlign: 'center',
    width: 200,
  },
  {
    field: 'month',
    headerName: 'Month',
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'numTransactions',
    headerName: 'Number of transactions',
    align: 'center',
    headerAlign: 'center',
    width: 200,
  },
  {
    field: 'rewardsEarned',
    headerName: 'Total Points',
    align: 'center',
    headerAlign: 'center',
    width: 300,
  },
];

export const minValueForRewards = 50;

export const valueToDoubleTheRewards = 100;
