// material-ui
import Typography from '@mui/material/Typography';
import fetchGetData from '../../client/client';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
// project imports
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {

  const navigate = useNavigate();

    useEffect(() => { 
      const isLoggedIn = localStorage.getItem('token');
      if(!isLoggedIn){
        navigate('/login');
        window.location.reload();
      }
    })

  return (
    <MainCard title="Albums">
      <Typography variant="body2">
        Albums
      </Typography>
    </MainCard>
  );
}
 