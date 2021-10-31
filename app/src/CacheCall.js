// sample component
import React from 'react';

// eslint-disable-next-line
function pad(number, length) {

  var str = number.toString(16);
  while (str.length < length) {
      str = '0' + str;
  }

  return str;
}

// eslint-disable-next-line
async function downloadObject(url) {
  const fetchOptions = {
    mode: 'no-cors',
  };
  try {
    const fetchResponse = await fetch(url, fetchOptions);
    return await fetchResponse.json();
  } catch (err) {
    console.error('Error - ', err);
  }
}

function createURI(url) {
  const uri = url.replace('{id}', pad(0,64));
  const contractInfo = downloadObject(uri);
  // return contractInfo.name;
  return uri
}

class CacheCallExample extends React.Component {
 state = { dataKey: null };

 componentDidMount() {
   const { drizzle } = this.props;
   const contract = drizzle.contracts.GameItems;
   let dataKey = contract.methods["uri"].cacheCall("0"); // declare this call to be cached and synchronized
   this.setState({ dataKey });
 }

 render() {
   const { GameItems } = this.props.drizzleState.contracts;
   const displayData = GameItems.uri[this.state.dataKey]; // if displayData (an object) exists, then we can display the value below
   return (
     <p>Hi from Truffle! Here is your storedData: {displayData && createURI(displayData.value)}</p>
   )
 }
}

export default CacheCallExample
