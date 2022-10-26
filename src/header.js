import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import './header.css'
import {
  BrowserRouter,
  Route,
  Routes,Link,
  Navigate,
} from 'react-router-dom'
import Toast from './toast'
import Test from './test'

function Header() {
    
  return (
    <BrowserRouter>
<div>
        <div class="">
</div>

<div className="navbar">
      <nav>
        <Link to="/toast" id="ab">Matches</Link>
        <Link to="/test" id="ab">Scores</Link>
        <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Udyam <span className="navHighlight">Scores</span>
      </nav>
    </div>
          

<div class="main">
  <p>Some text some text some text some text..</p>
</div>
      </div>

      <Routes>
          <Route path="/toast" element={<Toast/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/" element={<Navigate replace to="/toast" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Header;
