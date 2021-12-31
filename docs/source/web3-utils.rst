.. _utils:

========
web3.utils
========

This package provides utility functions for Ethereum dapps and other web3.js packages.

------------------------------------------------------------------------------



fromDecimalUnit
=====================

.. code-block:: javascript

    web3.utils.fromDecimalUnit(value , decimal)

Convert a value from decimal into non-decimal.

----------
Parameters
----------

1. ``value`` - ``string``: The value.
2. ``decimal`` - ``number``: The decimal to convert from. 

-------
Returns
-------

``BN``:  a `BN.js <https://github.com/indutny/bn.js/>`_ instance.

-------
Example
-------

.. code-block:: javascript

    web3.utils.fromDecimalUnit('1000', 3).toString();
    > "1000000"

    web3.utils.fromDecimalUnit('100.123456', 6).toString();
    > "100123456"


------------------------------------------------------------------------------

toDecimalUnit
=====================

.. code-block:: javascript

    web3.utils.toDecimalUnit(value , decimal)


Convert a value from non-decimal into decimal.
----------
Parameters
----------

1. ``value`` - ``string``: The value.
2. ``decimal`` - ``number``: The decimal to convert to. 

-------
Returns
-------

``string``: A string number.

-------
Example
-------

.. code-block:: javascript

    web3.utils.toDecimalUnit('1024', 3);
    > "1.024"

     web3.utils.toDecimalUnit('1024', 6);
    > "0.001024"

------------------------------------------------------------------------------


fromSatoshis
=====================

.. code-block:: javascript

    web3.utils.fromSatoshis(value)

Convert a value from satoshis into bsv.

----------
Parameters
----------

1. ``value`` - ``string|number``: The value.

-------
Returns
-------

``BN``:  a `BN.js <https://github.com/indutny/bn.js/>`_ instance.

-------
Example
-------

.. code-block:: javascript

    web3.utils.fromSatoshis('100000000').toString();
    > "1"

    web3.utils.fromSatoshis('1000').toString();
    > "0.00001"


------------------------------------------------------------------------------

toSatoshis
=====================

.. code-block:: javascript

    web3.utils.toSatoshis(value)

Convert a value from bsv into satoshis.

----------
Parameters
----------

1. ``value`` - ``string|number``: The value.

-------
Returns
-------

``number``:  A float number.

-------
Example
-------

.. code-block:: javascript

    web3.utils.toSatoshis('1').toString();
    > "100000000"

    web3.utils.toSatoshis('0.01').toString();
    > "1000000"


------------------------------------------------------------------------------

verifyMessage
=====================

.. code-block:: javascript

    web3.utils.verifyMessage(message, address, signature)

Verify the signature of a message.

----------
Parameters
----------

1. ``message`` - ``string``: The message to sign.
2. ``address`` - ``string``: The address of signer.
3. ``signature`` - ``string``: The signature.

-------
Returns
-------

``boolean``:  Whether signature is valid or not.

-------
Example
-------

.. code-block:: javascript

    web3.utils.verifyMessage("","","").toString();
    > false




------------------------------------------------------------------------------


