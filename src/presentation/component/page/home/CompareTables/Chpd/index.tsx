import { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react';
import TablePagination from '@material-ui/core/TablePagination';
import { useService } from 'presentation/context/Container';
import AppController from 'presentation/controller/app/AppController';
import Table from './Table';
import { Wrapper } from './styles';

const Chpd = observer(() => {
    const { periods, indPeriods } = useService(AppController);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Wrapper>
                <Table periods={periods} page={page} rowsPerPage={rowsPerPage} />
                <Table periods={indPeriods} page={page} rowsPerPage={rowsPerPage} />
            </Wrapper>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={periods.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
});

export default Chpd;
