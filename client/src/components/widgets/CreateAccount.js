import React from 'react';
import CreateAccForm from './CreateAccForm';

import '../../styles/create-acc.css';

const CreateAccount = () => {
    return (
        <div className="create-account-container">
            <div className="div-cr-acc">
                <h3 id="create-acc-title">Create Account</h3> <hr id="hr7" />
            </div>

            <div className="create-acc-form">
                <div id="first-box-1">
                    <p className="createacc-title">
                        <span id="orange-letters">Create your</span>
                        <span id="black-letters">account</span>
                    </p>

                    <p className="text-box">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis eligendi repellat incidunt commodi similique nam adipisci eum inventore consectetur labore veniam, suscipit asperiores ipsa numquam atque accusantium quibusdam eaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                <div className="create-acc-input-box">
                    <CreateAccForm className="create-acc-input" />
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;