import React, { memo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CustomFooterTotalComponent } from './CustomFooter';

function DataGridDisplay(props) {
  const { total, setTotal, header } = props;
  return (
    <>
      {header}
      <div style={{ height: 400, width: '50%' }}>
        <DataGrid
          rows={props.row}
          columns={props.column}
          pageSize={5}
          rowsPerPageOptions={[5]}
          aria-label={props.ariaLabel}
          components={
            props.showFooter
              ? {
                  Footer: CustomFooterTotalComponent,
                }
              : {}
          }
          componentsProps={{
            footer: { total },
          }}
          onStateChange={state => {
            const visibleRows = state.filter.visibleRowsLookup;
            let visibleItems = [];
            for (const [id, value] of Object.entries(visibleRows)) {
              if (value === true) {
                visibleItems.push(parseInt(id, 10));
              }
            }
            const res = props.row.filter(item =>
              visibleItems.includes(item.id)
            );
            const total = res
              .map(item => item.rewardsEarned)
              .reduce((a, b) => a + b, 0);
            setTotal && setTotal(total);
          }}
        />
      </div>
    </>
  );
}

export default memo(DataGridDisplay);
