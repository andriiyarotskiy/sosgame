import React from 'react';
import styled from 'styled-components';
import './requirments.css'
import table from '../../assets/img/disquette.svg'

const Requirments = () => {
    return (
        <div className="requirmentsContainer">
            <div className="requirments_title">
                <h3>
                    Can My Computer Run this game?
                </h3>
                <h1>
                    system requirements
                </h1>
            </div>
            <div className="table">
                <div className="divTable">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">
                        <span>
                            OS:
                        </span>
                                <p>
                                    Windows 7 64-bit only
                                    (No OSX support at this time)
                                </p>
                            </div>
                            <div className="divTableCell">
                                <span>pROCESSOR:</span>
                                <p>
                                    Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ
                                </p>
                            </div>
                        </div>
                        <div className="divTableRow">
                            <div className="divTableCell">
                                <span>mEMORY:</span>
                                <p>
                                    8 GB RAM
                                </p>
                            </div>
                            <div className="divTableCell">
                                <span>storage:</span>
                                <p>8 GB available space</p>
                            </div>
                        </div>
                        <div className="divTableRow last">
                            <div className="divTableCell">
                                <span>storage:</span>
                                <p>8 GB available space</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Requirments;