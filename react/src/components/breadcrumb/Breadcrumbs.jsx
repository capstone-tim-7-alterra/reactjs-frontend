import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { nameMap } from '../nameMap'; // Sesuaikan path jika perlu

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />;
}

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb" separator="›">
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {nameMap[to]}
                    </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                        {nameMap[to]}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
}
