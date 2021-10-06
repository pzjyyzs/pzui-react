import styled from "styled-components";
import { RootProps, TableProps } from "./types";


export const Root = styled.div<RootProps>(props => {
    const { divider } = props; 
    return {
        position: 'relative',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        backgroundColor: '#fff',
        transform: 'scale(1)',
        ...expandBorderStyles(divider),
    }
});

export const StyledTable = styled.table<RootProps>(props => {
    const { width } = props;
    return {
        borderSpacing: '0',
        boxSizing: 'border-box',
        minWidth: '100%',
        width: width || undefined,
    }
});

export const StyledTableHead = styled.thead<RootProps>(props => {
    return {}
});

export const StyledTableHeadRow = styled.tr<RootProps>(props => {
    return {}
});

export const StyledTableHeadCell = styled.th<RootProps>(props => {
    const { divider, size } = props;
    const borderVertical = divider === 'grid' || divider === 'vertical';
    const padding = { compact: '12px', default: '16px', spacious: '24px' };
    return {
        position: 'sticky',
        top: 0,
        padding: size ? padding[size] : '16px',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
        fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
        zIndex: 1,
        textAlign: 'left',
        backgroundColor: '#fff',
        color: '#000',
        ...(divider === 'clean' ? {} : { borderBottom: '1px solid rgba(0, 0, 0, .12)'} ),
        ':not(:last-child)': {
            borderRight: borderVertical ? '1px solid rgba(0, 0, 0, .12)' : ''
          },
    }
});

export const StyledTableBody = styled.tbody<RootProps>(props => {
    return {}
});

export const StyledTableLoadingMessage = styled.div`
    padding: 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: #000;
`;

export const StyledTableBodyRow = styled.tr`
    :hover {
        background-color: #f6f6f6;
    }
`;

export const TableBodyCell = styled.td<RootProps>(props => {
    const { divider, size, isLastRow } = props;
    const borderVertical = divider === 'grid' || divider === 'vertical';
    const borderHorizontal = divider === undefined || divider === 'horizontal' || divider === 'grid';
    const padding = { compact: '12px', default: '16px', spacious: '24px' };
    return {
        padding: size ? padding[size] : '16px',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'normal',
        fontFamily: `system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`,
        color: '#000',
        verticalAlign: 'top',
        borderBottom: !isLastRow && borderHorizontal ? '1px solid rgba(0, 0, 0, .12)' : '',
        ':not(:last-child)': {
            borderRight: borderVertical ? '1px solid rgba(0, 0, 0, .12)' : ''
        },
    }
});

const expandBorderStyles = (divider?: string) => {
    if (divider === 'grid' || divider === 'vertical') {
        return {
            border: '1px solid rgba(0, 0, 0, .12)',
        }
    } else {
        return {}
    }
} 