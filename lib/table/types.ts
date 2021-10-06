import React from "react";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    divider?: 'horizontal' | 'vertical' | 'grid' | 'clean';
    size?: 'compact' | 'default' | 'spacious';
    isLoading?: boolean;
    columns: Array<any>;
    loadingMessage?: string;
    data: Array<any>;
    emptyMessage?: string;
}

export interface RootProps extends React.TableHTMLAttributes<HTMLTableElement> {
    divider?: 'horizontal' | 'vertical' | 'grid' | 'clean';
    size?: 'compact' | 'default' | 'spacious';
    col?: React.ReactNode;
    colIndex?: number;
    isLastRow?: boolean;
    row?: React.ReactNode;
    rowIndex?: number;
}

