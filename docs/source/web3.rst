
====
Web3
====

This is the main (or 'umbrella') class of the sensible-web3 library.

.. code-block:: javascript

    var Web3 = require('@sensible-contract/sensible-web3');

    > Web3.utils
    > Web3.version

------------------------------------------------------------------------------

Web3 Instance
=============

The Web3 class is an umbrella package to house all BitcoinSV related modules.

.. code-block:: javascript

    new Web3(wallet[, provider])

----------
Parameters
----------

1. ``wallet`` - ``Wallet``: A object that implements the @sensible-contract/abstract-wallet methods, as a role to provide transaction signatures.
2. ``provider`` - ``SensiblequeryProvider``: (Optional) A SensiblequeryProvider object in @sensible-contract/providers, as a role to provide communication with bitcoin SV nodes.

-------
Example
-------

.. code-block:: javascript

    var Web3 = require('@sensible-contract/sensible-web3');

    var web3 = new Web3(window.sensilet);

    or 

    var {LocalWallet} = require('@sensible-contract/wallets');
    var web3 = new Web3(LocalWallet.fromWIF("xxxx"));

    > web3.wallet
    > web3.sensible
    > web3.utils
    > web3.version


------------------------------------------------------------------------------

modules
============

Will return an object with classes of all major modules, to be able to instantiate them manually.

-------
Returns
-------

``Object``: A list of module constructors:
     - ``Sensible`` - ``Constructor``: The Sensible module for interacting with sensible contracts.  (:ref:`web3.sensible <sensible>`).

-------
Example
-------

.. code-block:: javascript

    Web3.modules
    > {
        Sensible: Sensible(wallet, provider),
    }

------------------------------------------------------------------------------

providers
============

Contains the current available providers.

-------
Returns
-------

``Object``: with the following providers:
    - ``SensiblequeryProvider`` - ``Constructor``: The SensibleQuery provider.(Default provider) 
    - ``MetaSVProvider`` - ``Constructor``: MetaSV provider, does not support NFT.  
    - ``WhatsOnChainProvider`` - ``Constructor``: WhatsOnChain provider, does not support Token and NFT.  

-------
Example
-------

.. code-block:: javascript

    import Web3 from "@sensible-contract/sensible-web3";
    let provider = new Web3.providers.SensiblequeryProvider();
    let web3 = new Web3(sensilet,provider);

------------------------------------------------------------------------------

version
============

Static accessible property of the Web3 class and property of the instance as well.

.. code-block:: javascript

    Web3.version
    web3.version

Contains the current package version of the web3.js library.

-------
Returns
-------

``String``: The current version.

-------
Example
-------

.. code-block:: javascript

    web3.version;
    > "1.0.0"



------------------------------------------------------------------------------


utils
=====================

Static accessible property of the Web3 class and property of the instance as well.

.. code-block:: javascript

    Web3.utils
    web3.utils

Utility functions are also exposes on the ``Web3`` class object directly.

See :ref:`web3.utils <utils>` for more.


