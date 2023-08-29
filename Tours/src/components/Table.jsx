import React from 'react';
import { useTable } from 'react-table';

function TourTable({ data }) {
  const columns = React.useMemo(
    () => [
      { Header: 'Destination', accessor: 'destination' },
      { Header: 'Duration', accessor: 'duration' },
      { Header: 'Price', accessor: 'price' },
      { Header: 'Departure Dates', accessor: 'departureDates' },
      { Header: 'Tour Highlights', accessor: 'highlights' },
      { Header: 'Inclusions', accessor: 'inclusions' },
      { Header: 'Exclusions', accessor: 'exclusions' },
      { Header: 'Availability', accessor: 'availability' },
      { Header: '', accessor: 'bookButton' }, // Booking button column
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="table w-full border-collapse">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200 text-gray-700 font-semibold ">
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className="p-2 border-2 border-black">{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className='border p-2'>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TourTable;
