import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { actionCreated } from "../generated/schema"
import { actionCreated as actionCreatedEvent } from "../generated/eco/eco"
import { handleactionCreated } from "../src/eco"
import { createactionCreatedEvent } from "./eco-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let action_type = "Example string value"
    let description = "Example string value"
    let proof = "Example string value"
    let status = "boolean Not implemented"
    let confirmed = "boolean Not implemented"
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newactionCreatedEvent = createactionCreatedEvent(
      id,
      action_type,
      description,
      proof,
      status,
      confirmed,
      creator
    )
    handleactionCreated(newactionCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("actionCreated created and stored", () => {
    assert.entityCount("actionCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "action_type",
      "Example string value"
    )
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proof",
      "Example string value"
    )
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "status",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "confirmed",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "actionCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
