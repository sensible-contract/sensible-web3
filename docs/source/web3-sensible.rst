.. _sensible:

==============
web3.sensible
==============

The ``web3.sensible`` class allows you to interact with sensible contracts.


.. code-block:: javascript

    var Web3 = require('web3');
    var web3 = new Web3(window.sensilet);


    // -> web3.sensible



------------------------------------------------------------------------------



getBsvBalance
=====================

.. code-block:: javascript

    web3.sensible.getBsvBalance()

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns `Object`:
    * ``confirmAmount`` - ``string``: The confirmed amount.
    * ``pendingAmount`` - ``number``: The unconfirmed amount.
    * ``amount`` - ``number`` : The total amount.
    * ``uiAmount`` - ``string`` : The total amount with decimal.
    * ``decimal`` - ``number`` : The decimal.
    * ``utxoCount`` - ``number`` : The bsv utxo count.

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let balance = web3.sensible.getBsvBalance();
    console.log(balance)
    
    > {
        confirmAmount: 100000,
        pendingAmount: 0,
        amount: 100000,
        uiAmount: '0.00100000',
        decimal: 8,
        utxoCount: 1
        }
    
------------------------------------------------------------------------------



transferBsv
=====================

.. code-block:: javascript

    web3.sensible.transferBsv(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``receivers`` - :ref:`BsvReceiver[]<BsvReceiver>`: The receivers
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 

-------
Example
-------

.. code-block:: javascript
    
    const web3 = new Web3(window.sensilet);
    let _res1 = await web3.sensible.transferBsv(
      {
        receivers: [
          {
            address: "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj",
            amount: 1000,
          },
          {
            address: "1J1YJZwdGbnnEHV3bSbz24VYL3QyVGnxgg",
            amount: 200,
          },
        ],
      },
      { onlyEstimateFee: true }
    );
    console.log(_res1);
    > { fee: 131 }

    let _res2 = await web3.sensible.transferBsv(
      {
        receivers: [
          {
            address: "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj",
            amount: 1000,
          },
          {
            address: "1J1YJZwdGbnnEHV3bSbz24VYL3QyVGnxgg",
            amount: 200,
          },
        ],
      },
      { noBroadcast: true }
    );
    console.log(_res2);
    > {
        rawtx: '0100000001d19776eea58041900b2a20086d93614d1e9d842764216b3bb52f929f071456a7020000006a4730440220642d625911c2d81517d148828fe7ed58325714372d950d11699977177a93766802202dd9b4d768c62092925bcede67f4ec585466be294d559549c9d923b8e2a8c53d412103cbaedc26f03fd3ba02fc936f338e980c9e2172c5e23128877ed46827e935296fffffffff03e8030000000000001976a9149acddefa2781a7d66e3a6da3deb3df095857464b88acc8000000000000001976a914ba9444c7483a62394166d406164317c1c722e4a488ac132c0000000000001976a9149acddefa2781a7d66e3a6da3deb3df095857464b88ac00000000'
    }

    let _res3 = await web3.sensible.transferBsv({
      receivers: [
        {
          address: "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj",
          amount: 1000,
        },
        {
          address: "1J1YJZwdGbnnEHV3bSbz24VYL3QyVGnxgg",
          amount: 200,
        },
      ],
    });
    console.log(_res3);
    >{
        txid: 'f8b4ce47530c97ae2e4666a7823d3911ac5f4c7792d0024b5179b498fcf3f8d2'
    }

------------------------------------------------------------------------------


transferAllBsv
=====================

.. code-block:: javascript

    web3.sensible.transferAllBsv(to[, options])

----------
Parameters
----------

* ``to`` - ``string``:  The receiver address.
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let _res = await web3.sensible.transferAllBsv(
        "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj"
    );
    console..log(_res)
    > {
        txid: 'a4a9349972e91dde721452e2f9881233abb8e5409806212ef667e088b60fbc7e'
    }
    
------------------------------------------------------------------------------

= Token =
============


genesisToken
=====================

.. code-block:: javascript

    web3.sensible.genesisToken(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``tokenName`` - `string`: The token name. (Must not exceed 20 bytes)
   * ``tokenSymbol`` - `string`: The token symbol. (Must not exceed 10 bytes)
   * ``decimalNum`` - `number`: The token decimal.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 
    * ``token`` - :ref:`Token<Token>`:The token info.

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let _res = await web3.sensible.genesisToken({
        tokenName: "DemoToken",
        tokenSymbol: "DT",
        decimalNum: 3,
    });
    console.log(_res);
    > {
        token: {
            codehash: '777e4dd291059c9f7a0fd563f7204576dcceb791',
            genesis: '6f3e9b22cd75bbcb2c350e5b971ae7de93c650d0',
            sensibleId: '386eb18394c3fdad956889b77cb4f1c63e9c6ac2d23bc3c9448fbccaf402608b00000000'
        },
        txid: '8b6002f4cabc8f44c9c33bd2c26a9c3ec6f1b47cb7896895adfdc39483b16e38'
    }
    
------------------------------------------------------------------------------


issueToken
=====================

.. code-block:: javascript

    web3.sensible.issueToken(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``token`` - :ref:`Token<Token>`:The token to issue.
   * ``tokenAmount`` - `string`: The issue amount without decimal.
   * ``receiverAddress`` - `number`: The receiver address.
   * ``allowIncreaseIssues`` - `boolean`: (Optional) Whether to allow increase issues or not. The default is false.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DT = {
        codehash: "777e4dd291059c9f7a0fd563f7204576dcceb791",
        genesis: "6f3e9b22cd75bbcb2c350e5b971ae7de93c650d0",
        sensibleId:
        "386eb18394c3fdad956889b77cb4f1c63e9c6ac2d23bc3c9448fbccaf402608b00000000",
    };
    let _res = await web3.sensible.issueToken({
        token: DT,
        tokenAmount: "10000000",
        receiverAddress: "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj",
    });
    > {
        txid: 'fee969002a16c05b3460b25ab0644a313ee45c2725eae12e62e5c22c926e9a1b'
    }

.. note:: All the tokenAmount here mostly refer to the value without decimal places. In this example, only 1000.000 DT was issued. You can use the web3.utils.fromDecimalUnit/toDecimalUnit methods to convert.

------------------------------------------------------------------------------


transferToken
=====================

.. code-block:: javascript

    web3.sensible.transferToken(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``token`` - :ref:`Token<Token>`:The token to issue.
   * ``receivers`` - :ref:`TokenReceiver[]<TokenReceiver>`: The receivers.
   * ``autoMerge`` - `boolean`: (Optional) Whether to auto merge tokens or not. The default is true.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

.. note:: The number of bsv utxo inputs must not be greater than 3 and the number of token utxo must not be greater than 20, or the transaction will failed.  The best practice is to determine the number of utxos in the address and merge them in advance. 

.. note:: The autoMerge option will determine whether it should be merged and perform the actual merge operation. This will not be affected by the noBroadcast and onlyEstimate options, and the subsequent process will not continue until the merger is completed.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtxs`` - ``string[]``: The raw txs. When options.noBroadcast==true, this is the only returns.
    * ``txids`` - ``string[]``: The txids. 

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DT = {
        codehash: "777e4dd291059c9f7a0fd563f7204576dcceb791",
        genesis: "6f3e9b22cd75bbcb2c350e5b971ae7de93c650d0",
        sensibleId:
        "386eb18394c3fdad956889b77cb4f1c63e9c6ac2d23bc3c9448fbccaf402608b00000000",
        decimal: 3,
    };
    let _res = await web3.sensible.transferToken({
        token: DT,
        receivers: [
        {
            address: "1J1YJZwdGbnnEHV3bSbz24VYL3QyVGnxgg",
            amount: web3.utils.fromDecimalUnit("90", DT.decimal).toString(),
        },
        ],
    });
    console.log(_res);
    > {
        txids: [
            'ba2a951a182d8c638df72ee6b2d7cc35a1e2dbf4cd873a625ba68ca6563d54ba',
            '1c1d9d07b2ea5b0d73b0c5b952b8ccfe67e82c0f87464a8485c58026bcc1563c'
        ]
    }


------------------------------------------------------------------------------

getTokenList
=====================

.. code-block:: javascript

    web3.sensible.getTokenList([options])

----------
Parameters
----------

* ``options`` - `Object`: The default is {cursor:0, size:10}
    * ``cursor`` - ``number``: The cursor of results. 
    * ``size`` - ``number``: The size of results.

-------
Returns
-------

``Promise`` returns `Object[]`:
    * ``codehash`` - ``string``: The codehash of token.
    * ``genesis`` - ``string``: The genesis of token.
    * ``sensibleId`` - ``sensibleId``: The sensibleId of token.
    * ``name`` - ``string``: The name of token.
    * ``symbol`` - ``string``: The symbol of token.
    * ``tokenBalance`` - :ref:`TokenBalance<TokenBalance>`: The balance of token.

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let _res = await web3.sensible.getTokenList({ cursor: 0, size: 100 });
    console.log(_res);
    > [
        {
            codehash: '777e4dd291059c9f7a0fd563f7204576dcceb791',
            genesis: '6f3e9b22cd75bbcb2c350e5b971ae7de93c650d0',
            sensibleId: '386eb18394c3fdad956889b77cb4f1c63e9c6ac2d23bc3c9448fbccaf402608b00000000',
            name: 'DemoToken',
            symbol: 'DT',
            tokenBalance: {
            confirmAmount: '9910000',
            pendingAmount: '0',
            amount: '9910000',
            decimal: 3,
            uiAmount: '9910.000',
            utxoCount: undefined
            }
        },
        {
            codehash: '777e4dd291059c9f7a0fd563f7204576dcceb791',
            genesis: '8e9c53e1a38ff28772db99ee34a23bb305062a1a',
            sensibleId: '17f47c6861b3a4fec7d337d80d204e6d214836c88e49e9bea398feddddb455ae00000000',
            name: 'OVTS',
            symbol: 'OVTS',
            tokenBalance: {
            confirmAmount: '1000000',
            pendingAmount: '0',
            amount: '1000000',
            decimal: 3,
            uiAmount: '1000.000',
            utxoCount: undefined
            }
        }
    ]


------------------------------------------------------------------------------


getTokenBalance
=====================

.. code-block:: javascript

    web3.sensible.getTokenBalance(token)

----------
Parameters
----------

* ``token`` - `Object`: 
    * ``codehash`` - ``string``: The cursor of token. 
    * ``genesis`` - ``string``: The genesis of token.


-------
Returns
-------

``Promise`` returns  :ref:`TokenBalance<TokenBalance>`

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DT = {
        codehash: "777e4dd291059c9f7a0fd563f7204576dcceb791",
        genesis: "6f3e9b22cd75bbcb2c350e5b971ae7de93c650d0",
    };
    let _res = await web3.sensible.getTokenBalance(DT);
    console.log(_res);
    
    > {
        confirmAmount: '9910000',
        pendingAmount: '0',
        amount: '9910000',
        decimal: 3,
        uiAmount: '9910.000',
        utxoCount: 1
    }
    
------------------------------------------------------------------------------


= NFT =
============


genesisNft
=====================

.. code-block:: javascript

    web3.sensible.genesisNft(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``totalSupply`` - `number`: The total supply of NFT.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 
    * ``nft`` - :ref:`NFT<NFT>`:The nft info.

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let _res = await web3.sensible.genesisNft({
        totalSupply: "3",
    });
    console.log(_res);
    > {
        nft: {
            codehash: '22519e29424dc4b94b9273b6500ebadad7b9ad02',
            genesis: '358fdea6846f6f5b5afd94e0c5dfc53487b656cd',
            sensibleId: '2ed638839b450b6a3e0416c1c006c1269bc21cf80cbac75b4764a3f3985cc03400000000'
        },
        txid: '34c05c98f3a364475bc7ba0cf81cc29b26c106c0c116043e6a0b459b8338d62e'
    }
    
------------------------------------------------------------------------------



mintNft
=====================

.. code-block:: javascript

    web3.sensible.mintNft(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``nft`` - :ref:`NFT<NFT>`:The nft to mint.
   * ``metaData`` - :ref:`NftMetaData<NftMetaData>`: The metadata of nft.
   * ``receiverAddress`` - `number`: (Optional) The receiver address. The default is current account.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.

-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtxs`` - ``string[]``: The raw txs. When options.noBroadcast==true, this is the only returns.
    * ``txids`` - ``string[]``: The txids. 


-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DemoPunk = {
        codehash: "22519e29424dc4b94b9273b6500ebadad7b9ad02",
        genesis: "358fdea6846f6f5b5afd94e0c5dfc53487b656cd",
        sensibleId:
        "2ed638839b450b6a3e0416c1c006c1269bc21cf80cbac75b4764a3f3985cc03400000000",
    };
    let _res = await web3.sensible.mintNft({
        nft: DemoPunk,
        metaData: {
        name: "Demo Punk",
        description: "This is minted by sensible-web3.",
        image:
            "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=w128",
        },
    });
    console.log(_res);
    > {
        txids: [
            'b64fb07effcd981505821e0275b0098d12f2cc8b560ef6d511ede4cebd3dbce6',
            '2c48080e10cf77e11bbc44d15970d275949306f650eeccc35b3ee3f6ee5acb2f'
        ]
    }

------------------------------------------------------------------------------


transferNft
=====================

.. code-block:: javascript

    web3.sensible.transferNft(params[, options])

----------
Parameters
----------

* ``params`` - ``Object``:  
   * ``nft`` - :ref:`NFT<NFT>`:The nft to transfer.
   * ``receiverAddress`` - `string`: The receiver address.
   * ``utxos`` - :ref:`Utxo[]<Utxo>`: (Optional) Specify bsv utxos
    
* ``options`` - :ref:`TxOptions<TxOptions>`: The transaction options.


-------
Returns
-------

``Promise`` returns `Object`:
    * ``fee`` - ``number``: The estimateFee. When options.onlyEstimateFee==true, this is the only returns.
    * ``rawtx`` - ``string``: The raw tx. When options.noBroadcast==true, this is the only returns.
    * ``txid`` - ``string``: The txid. 

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DemoPunk = {
        codehash: "22519e29424dc4b94b9273b6500ebadad7b9ad02",
        genesis: "358fdea6846f6f5b5afd94e0c5dfc53487b656cd",
        tokenIndex: "0",
    };
    let _res = await web3.sensible.transferNft({
        nft: DemoPunk,
        receiverAddress: "1J1YJZwdGbnnEHV3bSbz24VYL3QyVGnxgg",
    });
    console.log(_res);
    > {
        txid: '1e1ca99df06601eab134f8e6ce565c6585a6bf3a6a2c96a2bef9060ac824cead'
    }


------------------------------------------------------------------------------

getNftCollectionList
=====================

.. code-block:: javascript

    web3.sensible.getNftCollectionList([options])

----------
Parameters
----------

* ``options`` - `Object`: The default is {cursor:0, size:10}
    * ``cursor`` - ``number``: The cursor of results. 
    * ``size`` - ``number``: The size of results.

-------
Returns
-------

``Promise`` returns `Object[]`:
    * ``codehash`` - ``string``: The codehash of NFT.
    * ``genesis`` - ``string``: The genesis of NFT.
    * ``sensibleId`` - ``sensibleId``: The sensibleId of NFT.
    * ``count`` - ``number``: The number owned

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    let _res = await web3.sensible.getNftCollectionList();
    console.log(_res);
    > [
        {
            codehash: '22519e29424dc4b94b9273b6500ebadad7b9ad02',
            genesis: '358fdea6846f6f5b5afd94e0c5dfc53487b656cd',
            sensibleId: '2ed638839b450b6a3e0416c1c006c1269bc21cf80cbac75b4764a3f3985cc03400000000',
            count: 1
        }
    ]


getNftList
=====================

.. code-block:: javascript

    web3.sensible.getNftList(params[, options])

----------
Parameters
----------

* ``params`` - `Object`: 
    * ``nft`` - ``NFT``:  
       * ``codehash`` - ``string``: The codehash of NFT. 
       * ``genesis`` - ``string``: The genesis of NFT.
    * ``withMetaData`` - ``boolean``: Whether return data with metaData or not. The default is true.
* ``options`` - `Object`: The default is {cursor:0, size:10}
    * ``cursor`` - ``number``: The cursor of results. 
    * ``size`` - ``number``: The size of results.

-------
Returns
-------

``Promise`` returns `Object[]`:
    * ``tokenIndex`` - ``string``: The tokenIndex.
    * ``metaData`` - :ref:`NftMetaData<NftMetaData>`: The metaData.

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DemoPunk = {
        codehash: "22519e29424dc4b94b9273b6500ebadad7b9ad02",
        genesis: "358fdea6846f6f5b5afd94e0c5dfc53487b656cd",
    };
    let _res = await web3.sensible.getNftList({ nft: DemoPunk });
    console.log(_res);
    > [
        {
            tokenIndex: '1',
            metaData: {
            name: 'Demo Punk',
            description: 'This is minted by sensible-web3.',
            image: 'https://lh3.googleusercontent.com/eOsY2Pa5j2OCmeJUijeSuUqbG6UBNVk2nFYWmzDKzPbWSer_eMc-LJU8hKbpVcm4TcQ66wxPhrABvjqizXnFGnkwCQupYaUlB9Po-Q=w600'
            }
        }
    ]


------------------------------------------------------------------------------

getNftMetaData
=====================

.. code-block:: javascript

    web3.sensible.getNftMetaData(nft)

----------
Parameters
----------

* ``nft`` - `Object`: 
    * ``codehash`` - ``string``: The codehash of NFT. 
    * ``genesis`` - ``string``: The genesis of NFT.
    * ``tokenIndex`` - ``string``: The tokenIndex of NFT.


-------
Returns
-------

``Promise`` returns `Object`:
    * ``name`` - ``number``: The name.
    * ``description`` - ``string``: The description.
    * ``image`` - ``string``: The image. 
    * ``tokenUri`` - ``string``: The tokenUri. 

-------
Example
-------

.. code-block:: javascript

    const web3 = new Web3(window.sensilet);
    const DemoPunk = {
        codehash: "22519e29424dc4b94b9273b6500ebadad7b9ad02",
        genesis: "358fdea6846f6f5b5afd94e0c5dfc53487b656cd",
        tokenIndex: "0",
    };
    let _res = await web3.sensible.getNftMetaData(DemoPunk);
    console.log(_res);
    > {
        name: 'Demo Punk',
        description: 'This is minted by sensible-web3.',
        image: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=w128'
    }

