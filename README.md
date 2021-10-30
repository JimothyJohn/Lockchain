# Lockchain

An experiment with the ERC1155 standard

## Prerequisites

You will need to install node, npm, and truffle. The below instructions assume you're on a Debian distro like Ubuntu.

```bash
user@host:~$ sudo apt update # Update repos if needed
user@host:~$ sudo apt -y install nodejs npm # Install Node.js and Node Package Manager
user@host:~$ npm install -g -y truffle # Install truffle as a global tool
```

## Installation

Install libraries (assumes you're on a Debian distro).

```bash
user@host:~$ git clone https://github.com/JimothyJohn/Lockchain.git # clone project repo assuming you already haven't 
user@host:~$ cd Lockchain # Move to React app
user@host:~/Lockchain$ cd app # Move to React app
user@host:~/Lockchain/app$ npm install # Install node libraries
```

## Running the demo

From there you'll just need to compile and migrate the contracts then run the React app...in two separate windows...

### Window 1
```bash
user@host:~$ truffle develop
truffle(develop)> compile
truffle(develop)> migrate
```

### Window 2
```bash
user@host:~/Lockchain/app$ npm run start # Run React app
```
