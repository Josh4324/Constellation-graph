import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  actionCreated,
  actionUpdated,
  treeCreated,
  treeUpdated,
  userCreated,
  userUpdatedActions,
  userUpdatedOverScore,
  userUpdatedScore,
  userUpdatedTree,
  userUpdatedWaste,
  wasteCreated,
  wasteUpdated
} from "../generated/eco/eco"

export function createactionCreatedEvent(
  id: BigInt,
  action_type: string,
  description: string,
  proof: string,
  status: boolean,
  confirmed: boolean,
  creator: Address
): actionCreated {
  let actionCreatedEvent = changetype<actionCreated>(newMockEvent())

  actionCreatedEvent.parameters = new Array()

  actionCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "action_type",
      ethereum.Value.fromString(action_type)
    )
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam("proof", ethereum.Value.fromString(proof))
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  actionCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return actionCreatedEvent
}

export function createactionUpdatedEvent(
  id: BigInt,
  status: boolean,
  confirmed: boolean,
  creator: Address
): actionUpdated {
  let actionUpdatedEvent = changetype<actionUpdated>(newMockEvent())

  actionUpdatedEvent.parameters = new Array()

  actionUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  actionUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  actionUpdatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  actionUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return actionUpdatedEvent
}

export function createtreeCreatedEvent(
  id: BigInt,
  no_of_trees: BigInt,
  locations: string,
  status: boolean,
  confirmed: boolean,
  creator: Address
): treeCreated {
  let treeCreatedEvent = changetype<treeCreated>(newMockEvent())

  treeCreatedEvent.parameters = new Array()

  treeCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  treeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "no_of_trees",
      ethereum.Value.fromUnsignedBigInt(no_of_trees)
    )
  )
  treeCreatedEvent.parameters.push(
    new ethereum.EventParam("locations", ethereum.Value.fromString(locations))
  )
  treeCreatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  treeCreatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  treeCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return treeCreatedEvent
}

export function createtreeUpdatedEvent(
  id: BigInt,
  status: boolean,
  confirmed: boolean,
  creator: Address
): treeUpdated {
  let treeUpdatedEvent = changetype<treeUpdated>(newMockEvent())

  treeUpdatedEvent.parameters = new Array()

  treeUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  treeUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  treeUpdatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  treeUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return treeUpdatedEvent
}

export function createuserCreatedEvent(
  id: BigInt,
  trees: BigInt,
  waste: BigInt,
  actions: BigInt,
  overall_score: BigInt,
  score: BigInt,
  user: Address
): userCreated {
  let userCreatedEvent = changetype<userCreated>(newMockEvent())

  userCreatedEvent.parameters = new Array()

  userCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam("trees", ethereum.Value.fromUnsignedBigInt(trees))
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam("waste", ethereum.Value.fromUnsignedBigInt(waste))
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "actions",
      ethereum.Value.fromUnsignedBigInt(actions)
    )
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "overall_score",
      ethereum.Value.fromUnsignedBigInt(overall_score)
    )
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )
  userCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return userCreatedEvent
}

export function createuserUpdatedActionsEvent(
  id: BigInt,
  actions: BigInt,
  overall_score: BigInt,
  score: BigInt
): userUpdatedActions {
  let userUpdatedActionsEvent = changetype<userUpdatedActions>(newMockEvent())

  userUpdatedActionsEvent.parameters = new Array()

  userUpdatedActionsEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userUpdatedActionsEvent.parameters.push(
    new ethereum.EventParam(
      "actions",
      ethereum.Value.fromUnsignedBigInt(actions)
    )
  )
  userUpdatedActionsEvent.parameters.push(
    new ethereum.EventParam(
      "overall_score",
      ethereum.Value.fromUnsignedBigInt(overall_score)
    )
  )
  userUpdatedActionsEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return userUpdatedActionsEvent
}

export function createuserUpdatedOverScoreEvent(
  id: BigInt,
  overall_score: BigInt
): userUpdatedOverScore {
  let userUpdatedOverScoreEvent = changetype<userUpdatedOverScore>(
    newMockEvent()
  )

  userUpdatedOverScoreEvent.parameters = new Array()

  userUpdatedOverScoreEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userUpdatedOverScoreEvent.parameters.push(
    new ethereum.EventParam(
      "overall_score",
      ethereum.Value.fromUnsignedBigInt(overall_score)
    )
  )

  return userUpdatedOverScoreEvent
}

export function createuserUpdatedScoreEvent(
  id: BigInt,
  score: BigInt
): userUpdatedScore {
  let userUpdatedScoreEvent = changetype<userUpdatedScore>(newMockEvent())

  userUpdatedScoreEvent.parameters = new Array()

  userUpdatedScoreEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userUpdatedScoreEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return userUpdatedScoreEvent
}

export function createuserUpdatedTreeEvent(
  id: BigInt,
  trees: BigInt,
  overall_score: BigInt,
  score: BigInt
): userUpdatedTree {
  let userUpdatedTreeEvent = changetype<userUpdatedTree>(newMockEvent())

  userUpdatedTreeEvent.parameters = new Array()

  userUpdatedTreeEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userUpdatedTreeEvent.parameters.push(
    new ethereum.EventParam("trees", ethereum.Value.fromUnsignedBigInt(trees))
  )
  userUpdatedTreeEvent.parameters.push(
    new ethereum.EventParam(
      "overall_score",
      ethereum.Value.fromUnsignedBigInt(overall_score)
    )
  )
  userUpdatedTreeEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return userUpdatedTreeEvent
}

export function createuserUpdatedWasteEvent(
  id: BigInt,
  waste: BigInt,
  overall_score: BigInt,
  score: BigInt
): userUpdatedWaste {
  let userUpdatedWasteEvent = changetype<userUpdatedWaste>(newMockEvent())

  userUpdatedWasteEvent.parameters = new Array()

  userUpdatedWasteEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  userUpdatedWasteEvent.parameters.push(
    new ethereum.EventParam("waste", ethereum.Value.fromUnsignedBigInt(waste))
  )
  userUpdatedWasteEvent.parameters.push(
    new ethereum.EventParam(
      "overall_score",
      ethereum.Value.fromUnsignedBigInt(overall_score)
    )
  )
  userUpdatedWasteEvent.parameters.push(
    new ethereum.EventParam("score", ethereum.Value.fromUnsignedBigInt(score))
  )

  return userUpdatedWasteEvent
}

export function createwasteCreatedEvent(
  id: BigInt,
  weight: BigInt,
  sorted: boolean,
  status: boolean,
  confirmed: boolean,
  creator: Address
): wasteCreated {
  let wasteCreatedEvent = changetype<wasteCreated>(newMockEvent())

  wasteCreatedEvent.parameters = new Array()

  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )
  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("sorted", ethereum.Value.fromBoolean(sorted))
  )
  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  wasteCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return wasteCreatedEvent
}

export function createwasteUpdatedEvent(
  id: BigInt,
  status: boolean,
  confirmed: boolean,
  creator: Address
): wasteUpdated {
  let wasteUpdatedEvent = changetype<wasteUpdated>(newMockEvent())

  wasteUpdatedEvent.parameters = new Array()

  wasteUpdatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  wasteUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )
  wasteUpdatedEvent.parameters.push(
    new ethereum.EventParam("confirmed", ethereum.Value.fromBoolean(confirmed))
  )
  wasteUpdatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return wasteUpdatedEvent
}
