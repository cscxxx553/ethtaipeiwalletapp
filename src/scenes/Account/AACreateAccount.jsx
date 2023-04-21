import React, { useEffect, useState, useCallback } from 'react';
import { EthAddressGenerator, RecoverAccount } from '../../utils/AccountUtils';
import AccountDetail from './AccountDetail';
import { AAWalletUtils } from '../../utils/AAWalletUtils';

const recoveryPhraseKeyName = 'recoveryPhrase';

function AACreateAccount() {

  // Declare a new state variable, which we'll call "seedphrase"
  // const [seedphrase, setSeedphrase] = useState('');

  // const [recoverSeedphrase, setRecoverSeedphrase] = useState('');

  const [tt, setTt] = useState();

  // Declare a new state variable, which we'll call "account"
  const [aaAccount, setAaAccount] = useState(null);

  // Declare a new state variable, which we'll call "showRecoverInput"
  // and initialize it to false
  const [aashowRecoverInput, setAaShowRecoverInput] = useState(false);
    
  function createAccount() {
    // Your create account logic here
    console.log('Create account clicked!');
    const result = EthAddressGenerator();
    console.log(result.account)
    console.log(result.seedPhrase)
    setAaAccount(result.account)
    // setSeedphrase(result.seedPhrase)
  }

  function handleChange(event) {
    // Update the seedphrase state with the value from the text input
    // setSeedphrase(event.target.value);
    // setRecoverSeedphrase(event.target.value);
  }

  const handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      recoverAccount(seedphrase);
    }
  }

  const recoverAccount = useCallback(
    // recoverAccount could be used without recoveryPhrase as an arguement but then we would have to
    // put it in a deps array.
    // async (recoveryPhrase) => {

    //   // Call the RecoverAccount function with no arguments
    //   // Call the RecoverAccount function and pass it 0 and the current seedphrase
    //   const result = await RecoverAccount(recoveryPhrase);

    //   // Update the account state with the newly recovered account
    //   setAccount(result.account);

    //   if (localStorage.getItem(recoveryPhraseKeyName) !== recoveryPhrase) {
    //     localStorage.setItem(recoveryPhraseKeyName, recoveryPhrase);
    //   }

    // }, []
  );

  useEffect(() => {
    // setTt();
    AAWalletUtils().then( function (res) {
      console.log("AACreateAccount print AAWalletUtils::",res);
      setTt(res);
    });
    // const localStorageRecoveryPhrase = localStorage.getItem(recoveryPhraseKeyName)
    // if (localStorageRecoveryPhrase) {
    //   setSeedphrase(localStorageRecoveryPhrase);
    //   recoverAccount(localStorageRecoveryPhrase);
    // }
  }, [])


  return (
    <div>
      
      <form onSubmit={event => event.preventDefault()}>
        <button type="button" className="btn btn-primary" onClick={createAccount}>
          Create Account
        </button>
        {/* Add a button to toggle showing the recover account input and button */}
        {/* If show recover input is visible, clicking the button again will submit the phrase in the input */}
        <button type="button" className="btn btn-outline-primary ml-3"
          onClick={() => aashowRecoverInput ? recoverAccount(seedphrase) : setAaShowRecoverInput(true)}
          // if the recoveryinput is showing but there is no seedphrase, disable the ability to recover account
          disabled={aashowRecoverInput && !seedphrase}
        >
          Recover account
        </button>
        {/* Show the recover account input and button if showRecoverInput is true */}
        {aashowRecoverInput && (
          <div className="form-group mt-3">
            <input type="text" placeholder='Paste Seedphrase and Press Enter' className="form-control"
            value={recoverSeedphrase} onChange={handleChange} onKeyDown={handleKeyDown} />
              {/*value={seedphrase} onChange={handleChange} onKeyDown={handleKeyDown} />*/}
          </div>
        )}
      </form>
      <p>Address: {tt === null? "": tt}</p>
      {/*<p>seedphrase: {seedphrase === null? "": seedphrase}</p>*/}
      <hr/>
      
      
      
    </div>
  );
}

export default AACreateAccount;
