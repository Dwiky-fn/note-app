import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiArchive } from 'react-icons/fi';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to='/add'><FiPlusCircle /></Link></li>
        <li><Link to='/archive'><FiArchive /></Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;