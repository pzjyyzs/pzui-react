import React from 'react';
import { Root, StyledTable, StyledTableBody, StyledTableBodyRow, StyledTableHead, StyledTableHeadCell, StyledTableHeadRow, StyledTableLoadingMessage, TableBodyCell } from "./style.componets";
import { TableProps } from "./types";

const Table: React.FunctionComponent<TableProps> = (props)  => {
    const { columns, divider, size, isLoading, loadingMessage, data, emptyMessage }  = props;
    const isEmpty = !isLoading && data.length === 0;
    const isRendered = !isLoading && !isEmpty;
    return (
        <Root>
            <StyledTable>
                <StyledTableHead>
                    <StyledTableHeadRow>
                    { 
                        columns.map((col, colIndex) => (
                            <StyledTableHeadCell 
                                key={colIndex} 
                                col={col} 
                                colIndex={colIndex}
                                divider={divider}
                                size={size}
                            >
                                { col }
                            </StyledTableHeadCell>
                        )) 
                    }
                    </StyledTableHeadRow>
                </StyledTableHead>

                <StyledTableBody>
                    { 
                        isLoading && (
                            <tr>
                                <td colSpan={columns.length}>
                                        <StyledTableLoadingMessage>
                                        {
                                           loadingMessage
                                        }
                                        </StyledTableLoadingMessage>
                                </td>
                            </tr>
                        )
                    }

                    { 
                        isEmpty && emptyMessage && (
                            <tr>
                                <td colSpan={columns.length}>
                                    <StyledTableLoadingMessage>
                                        {
                                           emptyMessage
                                        }
                                    </StyledTableLoadingMessage>
                                </td>
                            </tr>
                        )
                    }

                    { 
                        isRendered && data.map((row, rowIndex) => {
                            <StyledTableBodyRow
                                key={rowIndex}
                            >
                                {
                                    columns.map((col, colIndex) => {
                                        <TableBodyCell
                                            key={colIndex}
                                            col={col}
                                            colIndex={colIndex}
                                            divider={divider}
                                            row={row}
                                            rowIndex={rowIndex}
                                            isLastRow={rowIndex === data.length - 1}
                                            size={size}
                                        >
                                            { row[colIndex] }
                                        </TableBodyCell>
                                    })
                                }
                            </StyledTableBodyRow>
                        })
                    }
                </StyledTableBody>
            </StyledTable>
        </Root>
    )
}

export default Table;