.. _wallet:

========
web3.wallet
========

The ``web3.sensible`` provide you functions to interact with connected wallet.

------------------------------------------------------------------------------



getPublicKey
=====================

.. code-block:: javascript

    web3.wallet.getPublicKey([index])

Get publicKey of current wallet.

----------
Parameters
----------

1. ``index`` - ``number``: The index of the wallet account.  (Not supported in sensilet)

.. note:: At present, the implementation of this method is mainly to obtain the current account, and does not support obtaining other account information based on index.

-------
Returns
-------

``Promise`` returns `string`:The publicKey.

-------
Example
-------

.. code-block:: javascript

    let web3 = new Web3(window.sensilet);
    let _res = await web3.wallet.getPublicKey();
    console.log(_res);
    > 03cbaedc26f03fd3ba02fc936f338e980c9e2172c5e23128877ed46827e935296f

------------------------------------------------------------------------------


getAddress
=====================

.. code-block:: javascript

    web3.wallet.getAddress([index])

Get address of current wallet.

----------
Parameters
----------

1. ``index`` - ``number``: The index of the wallet account.  (Not supported in sensilet)

.. note:: At present, the implementation of this method is mainly to obtain the current account, and does not support obtaining other account information based on index.

-------
Returns
-------

``Promise`` returns `string`:The address.

-------
Example
-------

.. code-block:: javascript

    let web3 = new Web3(window.sensilet);
    let _res = await web3.wallet.getAddress();
    console.log(_res);
    > 1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj

------------------------------------------------------------------------------


signTransaction
=====================

.. code-block:: javascript

    web3.wallet.signTransaction(txHex, inputInfos)

Sign transaction.

----------
Parameters
----------

1. ``txHex`` - ``string``: The raw transaction in hex.
2. ``inputInfos`` - :ref:`InputInfo[]<InputInfo>`: The info of the inputs which to be signed.

.. note:: Only pass the input infos that requires the account's signature

-------
Returns
-------

``Promise`` returns :ref:`SigResult[]<SigResult>`: The signature results.

-------
Example
-------

.. code-block:: javascript

    let web3 = new Web3(window.sensilet);
    let txHex =
        "0100000001adce24c80a06f9bea2962c6a3abfa685655c56cee6f834b1ea0166f09da91c1e0100000000ffffffff02e8030000000000001976a914ba9444c7483a62394166d406164317c1c722e4a488acdd690000000000001976a9149acddefa2781a7d66e3a6da3deb3df095857464b88ac00000000";
    let inputInfos = [
        {
            inputIndex: 0,
            scriptHex: "76a9149acddefa2781a7d66e3a6da3deb3df095857464b88ac",
            satoshis: 28214,
            sighashType: 65,
        },
    ];
    let sigResults = await web3.wallet.signTransaction(txHex, inputInfos);
    console.log(sigResults);
    > [
        {
            sig: '304502210083dbae09389f2cf3503ed4643efa80c15af593347d2cf1179d731590c1a89ba102206eb234f3341619576b8b5cd441ae5abf48497598491ccfe44d6223ae5fc77a00',
            publicKey: '03cbaedc26f03fd3ba02fc936f338e980c9e2172c5e23128877ed46827e935296f'
        }
    ] 


------------------------------------------------------------------------------

signMessage
=====================

.. code-block:: javascript

    web3.wallet.signMessage(message[, address])

Sign message.

----------
Parameters
----------

1. ``message`` - ``string``: A string to be signed.
2. ``address`` - ``number|string``: (Optional) The address of the account which to sign.(Not supported in sensilet)

.. note:: At present, most implementations can only use the current account to sign, and cannot use address to specify the account.

-------
Returns
-------

``Promise`` returns ``string``:The signature result.

-------
Example
-------

.. code-block:: javascript

    let web3 = new Web3(window.sensilet);
    let _res = await web3.wallet.signMessage("hello world.");
    console.log(_res);
    let valid = web3.utils.verifyMessage(
        "hello world.",
        "1F7XgiBcErvnsh54YgwQbhG7Mxp8Mig2Vj",
        _res
    );
    console.log(valid);
    > H4BVT1Q64d3fR61lXY90KI24SXcjmVh8bQ6NbXHGv9v6BzarylnsXMd1xKvIGFs8erJQKerLOunzOhc+w7RYixo=
      true  

------------------------------------------------------------------------------