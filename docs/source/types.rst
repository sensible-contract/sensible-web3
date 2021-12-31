.. _types:


.. _Utxo:

Utxo
=====================
.. code-block:: javascript

    type Utxo = {
        txId: string;
        outputIndex: number;
        satoshis: number;
        address: string;
    };


.. _TxOptions:

TxOptions
=====================
.. code-block:: javascript

    type TxOptions = {
        onlyEstimateFee?: boolean;
        noBroadcast?: boolean;
        dumpTx?: boolean;
    };


.. _BsvReceiver:

BsvReceiver
=====================
.. code-block:: javascript

    type BsvReceiver = {
        address: string;
        amount: number;
    };

.. _TokenReceiver:

TokenReceiver
=====================
.. code-block:: javascript

    type TokenReceiver = {
        address: string;
        amount: string;
    };

.. _Token:

Token
=====================
.. code-block:: javascript

    type Token = {
        codehash: string;
        genesis: string;
        sensibleId?: string;
    };

.. _TokenBalance:

TokenBalance
=====================
.. code-block:: javascript

    type TokenBalance = {
        confirmAmount: string;
        pendingAmount: string;
        amount: string;
        decimal:number;
        uiAmount:string;
        utxoCount:number;
    };

.. _NFT:

NFT
=====================
.. code-block:: javascript

    type NFT = {
        codehash: string;
        genesis: string;
        sensibleId?: string;
        tokenIndex?: string;
    };

.. _NftMetaData:

NftMetaData
=====================
.. code-block:: javascript

    type NftMetaData = {
        name?: string;
        description?: string;
        image?: string;
        tokenUri?: string;
    } 

.. _InputInfo:

InputInfo
=====================
.. code-block:: javascript

    type InputInfo = {
        inputIndex: number;
        scriptHex: string;
        satoshis: number;
        sighashType: number;
        address?: number | string;
    };
    
.. _SigResult:

SigResult
=====================
.. code-block:: javascript

    type SigResult = {
        sig: string;
        publicKey: string ;
    };

