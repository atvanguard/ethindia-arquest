pragma solidity ^0.4.4;

import "@aragon/os/contracts/apps/AragonApp.sol";
import "@aragon/os/contracts/lib/zeppelin/math/SafeMath.sol";

contract InvoiceApp is AragonApp {
    using SafeMath for uint256;

    /// Events
    event Increment(address indexed entity, uint256 step);
    event Decrement(uint256 step);
    event CreatePaymentRequest(string data);

    /// State
    uint256 public value;

    /// ACL
    bytes32 constant public INCREMENT_ROLE = keccak256("INCREMENT_ROLE");
    bytes32 constant public DECREMENT_ROLE = keccak256("DECREMENT_ROLE");

    /**
     * @notice Increment the counter by `step`
     * @param step Amount to increment by
     */
    function increment(uint256 step) auth(INCREMENT_ROLE) external {
        value = value.add(step);
        Increment(msg.sender, step);
    }

    /**
     * @notice Create Payment Request of `amount` for `payer`
     * @param payer payer
     */
    function createPaymentRequest(string payer, uint256 amount) auth(INCREMENT_ROLE) external {
      CreatePaymentRequest(payer);
      // Increment(msg.sender, 1);
    }

    /**
     * @notice Decrement the counter by `step`
     * @param step Amount to decrement by
     */
    function decrement(uint256 step) external {
        value = value.add(step);
        Decrement(step);
    }
}
