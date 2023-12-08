import {
  actionCreated as actionCreatedEvent,
  actionUpdated as actionUpdatedEvent,
  treeCreated as treeCreatedEvent,
  treeUpdated as treeUpdatedEvent,
  userCreated as userCreatedEvent,
  userUpdatedActions as userUpdatedActionsEvent,
  userUpdatedOverScore as userUpdatedOverScoreEvent,
  userUpdatedScore as userUpdatedScoreEvent,
  userUpdatedTree as userUpdatedTreeEvent,
  userUpdatedWaste as userUpdatedWasteEvent,
  wasteCreated as wasteCreatedEvent,
  wasteUpdated as wasteUpdatedEvent
} from "../generated/eco/eco"
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
} from "../generated/schema"

export function handleactionCreated(event: actionCreatedEvent): void {
  let entity = new actionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.action_type = event.params.action_type
  entity.description = event.params.description
  entity.proof = event.params.proof
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleactionUpdated(event: actionUpdatedEvent): void {
  let entity = new actionUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handletreeCreated(event: treeCreatedEvent): void {
  let entity = new treeCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.no_of_trees = event.params.no_of_trees
  entity.locations = event.params.locations
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handletreeUpdated(event: treeUpdatedEvent): void {
  let entity = new treeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserCreated(event: userCreatedEvent): void {
  let entity = new userCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.trees = event.params.trees
  entity.waste = event.params.waste
  entity.actions = event.params.actions
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserUpdatedActions(event: userUpdatedActionsEvent): void {
  let entity = new userUpdatedActions(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.actions = event.params.actions
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserUpdatedOverScore(
  event: userUpdatedOverScoreEvent
): void {
  let entity = new userUpdatedOverScore(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.overall_score = event.params.overall_score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserUpdatedScore(event: userUpdatedScoreEvent): void {
  let entity = new userUpdatedScore(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.score = event.params.score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserUpdatedTree(event: userUpdatedTreeEvent): void {
  let entity = new userUpdatedTree(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.trees = event.params.trees
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleuserUpdatedWaste(event: userUpdatedWasteEvent): void {
  let entity = new userUpdatedWaste(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.waste = event.params.waste
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlewasteCreated(event: wasteCreatedEvent): void {
  let entity = new wasteCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.weight = event.params.weight
  entity.sorted = event.params.sorted
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlewasteUpdated(event: wasteUpdatedEvent): void {
  let entity = new wasteUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.eco_id = event.params.id
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
