import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    user: any[]
}

export function PaginationControlled({currentPage, setCurrentPage, user}: Props) {

  const handleChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Stack spacing={1}>
      <Typography>pessoas: {currentPage}</Typography>
      <Pagination count={currentPage + user.length} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}