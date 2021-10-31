# Lockchain

An experiment with the ERC1155 standard on Linux.

## Prerequisites

You will need to install node, npm, and truffle. Skip to third step if npm is already installed:

```bash
user@host:~$ sudo apt update # Update repos if needed
user@host:~$ sudo apt -y install nodejs npm # Install Node.js and Node Package Manager
user@host:~$ npm install -g -y truffle # Install truffle as a global tool
```

## Installation

```bash
user@host:~$ git clone https://github.com/JimothyJohn/Lockchain.git # clone project repo assuming you already haven't 
user@host:~$ cd Lockchain # Move to repo
user@host:~/Lockchain$ git submodule init # Initialize OpenZeppelin 
user@host:~$ cd app # Move to React app
user@host:~/Lockchain/app$ npm install # Install node libraries
```

## Running the demo

From there you'll just need to compile and migrate the contracts then run the React app...in two separate terminals...

### Terminal 1

Inside root of repository:

```bash
user@host:~/Lockchain$ truffle develop
truffle(develop)> compile
truffle(develop)> migrate
```

### Terminal 2

Inside React app folder:

```bash
user@host:~/Lockchain/app$ npm run start # Run React app
```
