import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha,darken} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import AvatarGroup from '@mui/material/AvatarGroup'; 
import Stack from '@mui/material/Stack'; 
import { makeStyles } from '@mui/styles';
import { Button, Grid, Select, MenuItem, TextField, List, Pagination, useMediaQuery, } from '@mui/material';
import { rows } from './data';
import MenuIcon from '@mui/icons-material/Menu'; 
import './table.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Archive, DragIndicator, DragIndicatorOutlined, ElectricCar, FolderCopySharp, GroupOutlined, ImportExportOutlined, ListAlt, Search, 
  Settings, SwapVertOutlined, SwapVerticalCircleOutlined, TuneOutlined } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Brand',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'members',
    numeric: true,
    disablePadding: false,
    label: 'Members',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Categories',
  },
  {
    id: 'tags',
    numeric: true,
    disablePadding: false,
    label: 'Tags',
  },
  {
    id: 'nextmeeting',
    numeric: true,
    disablePadding: false,
    label: 'Next meeting',
  },
];


function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
  <TableCell
    key={headCell.id}
    align="left"
    padding={headCell.disablePadding ? 'none' : 'normal'}
    sortDirection={orderBy === headCell.id ? order : false}
    sx={{ 
      color: 'grey',
      '&.Mui-active': {
        color: 'action.active',
      },
      '&:hover': {
        color: 'text.primary',
      },
      ...(headCell.id === 'members' && {
        paddingLeft: '76px', 
      }),
    }}
  >
    <TableSortLabel
      active={orderBy === headCell.id}
      direction={orderBy === headCell.id ? order : 'asc'}
      onClick={createSortHandler(headCell.id)}
      sx={{ 
        color: 'grey',
        '&.Mui-active': {
          color: 'action.active',
        },
        '&:hover': {
          color: 'text.primary',
        },
      }}
    >
      {headCell.label}
      {orderBy === headCell.id ? (
        <Box component="span" sx={visuallyHidden}>
          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </Box>
      ) : null}
    </TableSortLabel>
  </TableCell>
))}

      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected, searchQuery, handleSearchChange,toggleSidebar } = props;
  const [allBrands, setAllBrands] = React.useState('');
  const [desks, setDesks] = React.useState('');
  const [tags, setTags] = React.useState('');
  
  
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:1198px)');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isFewSelected = useMediaQuery('(max-width:1198px)');
  const handleAllBrandsChange = (event) => setAllBrands(event.target.value);
  const handleDesksChange = (event) => setDesks(event.target.value);
  const handleTagsChange = (event) => setTags(event.target.value);

  return (
    <React.Fragment>
   <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: isSmallScreen ? 'wrap' : 'nowrap', // Wrap toolbar contents on small screens
        }}
      >
       <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            mb: { xs: isFewSelected && numSelected > 4 ? 2 : 0, sm: 0 },
          }}
        >
        <Typography
          sx={{
            fontWeight: "bold",
            display: 'inline-flex', 
            alignItems: 'center',
           
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          
          <IconButton 
          onClick={toggleSidebar}
            sx={{ 
              display: matches ? 'inline-flex' : 'none', 
              marginRight: '8px',
            }}
          >
            
            <MenuIcon/>
          </IconButton>
          {numSelected > 0 ? `${numSelected} selected` : 'Products'}
        </Typography>
      </Box>

      {numSelected > 0 ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0, // Prevent shrinking on smaller screens
              ml: isSmallScreen ? 'auto' : 0, // Margin left auto on small screens
            }}
          >
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Archive">
            <IconButton>
              <Archive/>
            </IconButton>
          </Tooltip>
        
        </Box>
      ) : (
        // Search and other actions when no items are selected
        <Grid container spacing={2} justifyContent="flex-end" >
        <Grid item xs={12} sm={12} lg ={10} md={7}>
        <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
          <TextField
       
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <IconButton position="start">
                  <Search />
                </IconButton>
              ),
            }}
          />
           <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', lg: 'flex-start' } }}>

<IconButton size="small">
  <Settings />
</IconButton>
<IconButton size="small">
  <FolderCopySharp />
</IconButton>
</Box>
          </Box>
        </Grid>
     
       
      </Grid>

      )}
      
    </Toolbar>
     <Grid container spacing={1} alignItems="center" justifyContent="space-between" sx={{ mt: 2, mb: 2, pl: 2, pr: 2 }}>
     <Grid item xs={12} sm={12} lg={8} md={12}>
       <Select value={allBrands} displayEmpty onChange={handleAllBrandsChange} size="small" sx={{mr: 1 ,ml:0,mb:1, fontWeight:"600",color:"#343a40",fontSize:"14px"}}
         >
         <MenuItem value="" >All Brands</MenuItem>
        
       </Select>
       <Select value={desks} displayEmpty onChange={handleDesksChange} size="small" sx={{mr: 1,mb:1, fontWeight:"600",color:"#343a40",fontSize:"14px"}}>
         <MenuItem value="">Desk</MenuItem>
        
       </Select>
       <Select value={tags} displayEmpty onChange={handleTagsChange}  size="small" sx={{mr: 1, fontWeight:"600",color:"#343a40",fontSize:"14px"}}>
         <MenuItem value="" sx={{backgroundColor:"green"}} >Tags</MenuItem>
         <MenuItem value="">Tags</MenuItem>
         
       </Select>
       <Button variant="outlined" size="small" color='success'  sx={{mr: 1, fontWeight:"600",color:"grey"}} startIcon={<SwapVertOutlined/>}>Sort</Button>
       <Button variant="outlined" size="small"  color='success' sx={{mr: 1, fontWeight:"600",color:"grey"}} startIcon={<TuneOutlined/>}>Filter</Button>
     </Grid>
     <Grid item xs={12} sm={12} lg={4} md={12}>
     <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', lg: 'flex-end' } }}>
       <Button variant="outlined" size="small" color='success' sx={{mr: 1, fontWeight:"600",color:"#343a40"}} startIcon={<GroupOutlined/>}>Meeting</Button>
       <Button variant="outlined" size="small" color='success' sx={{mr: 1, fontWeight:"600",color:"#343a40"}} startIcon={<SwapVerticalCircleOutlined/>}>Import/Export</Button>
     </Box>
   </Grid>
   </Grid>
   </React.Fragment>
    
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  searchQuery: PropTypes.string,
  handleSearchChange: PropTypes.func.isRequired,
};


export default function EnhancedTable({toggleSidebar}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchQuery, setSearchQuery] = React.useState("");


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setPage(0);
  };

  const visibleRows = React.useMemo(() => {
    const filteredRows = rows.filter((row) => {
      return (
        row.brand.toLowerCase().includes(searchQuery) ||
        row.description.toLowerCase().includes(searchQuery) ||
        row.categories.some(category => category.toLowerCase().includes(searchQuery)) ||
        row.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      );
    });

    return stableSort(filteredRows, getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage, searchQuery]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };


  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const theme = useTheme();

// Function to get a random color
const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 361); 
  return `hsl(${hue}, 100%, 80%)`; 
};


  return (
    <Box sx={{ width: '100%', height: '100vh', }}>
        <EnhancedTableToolbar numSelected={selected.length} searchQuery={searchQuery}   toggleSidebar={toggleSidebar}handleSearchChange={handleSearchChange} />

        <hr/>
        <TableContainer component={Paper} style={{ maxHeight: '500px', overflow: 'auto' }}>
  <Table stickyHeader aria-label="sticky table" size= 'small'>
        
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
     <TableBody>
  {visibleRows.map((row, index) => {
    const isItemSelected = isSelected(row.id);
    const labelId = `enhanced-table-checkbox-${index}`;

    return (
      <TableRow
        hover
        onClick={(event) => handleClick(event, row.id)}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            checked={isItemSelected}
            inputProps={{
              'aria-labelledby': labelId,
            }}
          />
        </TableCell>
        <TableCell component="th" scope="row" padding="none" align='left'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={row.icon}
              sx={{ width: 24, height: 24, marginRight: 1 }}
            />
            {row.brand}
          </Box>
        </TableCell>
        <TableCell 
  align="left" 
  sx={{ maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
  title={row.description} 
>
  {row.description}
</TableCell>

      
        <TableCell align="left">
  <AvatarGroup max={4}>
    {row.members.map((member) => (
      <Avatar key={member.id} src={member.avatarUrl} alt={member.name} />
    ))}
  </AvatarGroup>
</TableCell>

<TableCell align="left">
      <Stack direction="row" spacing={1}>
        {row.categories.map((category) => (
          <Chip
            key={category}
            label={category}
            sx={{
              bgcolor: getRandomColor(), 
              color: theme.palette.getContrastText(getRandomColor()),
              borderRadius: '16px',
              fontSize: '0.75rem',
              height: 26,
              '&:hover': {
                bgcolor: darken(getRandomColor(), 0.2), 
              },
            }}
          />
        ))}
      </Stack>
    </TableCell>

    <TableCell align="left">
  <Stack direction="row" spacing={1} wrap="wrap"> 
    {row.tags.map((tag, index) => (
      <Chip
        key={index}
        label={`#${tag}`}
        size="small"
        variant="outlined"
        sx={{
          color: 'grey', 
          borderColor: 'lightgrey', 
          backgroundColor: 'transparent', 
          fontSize: '0.75rem', 
          height: 26, 
          
        }}
      />
    ))}
  </Stack>
</TableCell>

<TableCell align="left">
      <Chip
        label={row.nextmeeting}
        sx={{
          bgcolor: getRandomColor(), 
          color: theme.palette.getContrastText(getRandomColor()),
          borderRadius: '16px',
          fontSize: '0.75rem',
          height: 26,
          '&:hover': {
            bgcolor: darken(getRandomColor(), 0.2), 
          },
        }}
      />
    </TableCell>


       
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        
        />
       
    
      
    </Box>
  );
}


