import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__grid">
                <div className="header__logo">GRAP</div>
                <div className="header__icongrid">
                    <IconButton>
                        <HomeIcon />
                    </ IconButton>
                    <IconButton>
                        <CreateIcon />
                    </ IconButton>
                    <IconButton>
                        <ForumIcon />
                    </ IconButton>
                </div>
            </div>
        </div>
    );
}

export default Header;