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
 Waste,
 Tree,
 Action,
 User
} from "../generated/schema"




export function handleactionCreated(event: actionCreatedEvent): void {
  let entity = new Action(event.params.id.toString())
  entity.action_type = event.params.action_type
  entity.description = event.params.description
  entity.proof = event.params.proof
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

 
  entity.save()
}

export function handleactionUpdated(event: actionUpdatedEvent): void {
  let id = event.params.id.toString()
  let entity = Action.load(id);

  if (entity == null){
    entity = new Action(id);
  }
 

  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

 

  entity.save()
}



export function handletreeCreated(event: treeCreatedEvent): void {

  let entity = new Tree(event.params.id.toString())
  entity.no_of_trees = event.params.no_of_trees
  entity.locations = event.params.locations
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.save()
}

export function handletreeUpdated(event: treeUpdatedEvent): void {

  let id = event.params.id.toString()
  let entity = Tree.load(id);

  if (entity == null){
    entity = new Tree(id);
  }
 
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

 

  entity.save()
}

export function handleuserCreated(event: userCreatedEvent): void {

  let entity = new User(event.params.id.toString())
 

  entity.trees = event.params.trees
  entity.waste = event.params.waste
  entity.actions = event.params.actions
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score
  entity.user = event.params.user

  entity.save()
}

 export function handleuserUpdatedActions(event: userUpdatedActionsEvent): void {

  
  let entity = User.load(event.params.id.toString());

  if (entity == null){
    entity = new User(event.params.id.toString());
  }

  
  entity.actions = event.params.actions
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score

  entity.save()
}



export function handleuserUpdatedTree(event: userUpdatedTreeEvent): void {
  let entity = User.load(event.params.id.toString());

  if (entity == null){
    entity = new User(event.params.id.toString());
  }

  entity.trees = event.params.trees
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score


  entity.save()
}

export function handleuserUpdatedWaste(event: userUpdatedWasteEvent): void {
  let entity = User.load(event.params.id.toString());

  if (entity == null){
    entity = new User(event.params.id.toString());
  }

  entity.waste = event.params.waste
  entity.overall_score = event.params.overall_score
  entity.score = event.params.score


  entity.save()
} 

export function handlewasteCreated(event: wasteCreatedEvent): void {
  let entity = new Waste(event.params.id.toString())

 
  entity.weight = event.params.weight
  entity.sorted = event.params.sorted
  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.save()
}

export function handlewasteUpdated(event: wasteUpdatedEvent): void {
  let id = event.params.id.toString()
  let entity = Waste.load(id);

  if (entity == null){
    entity = new Waste(id);
  }

  entity.status = event.params.status
  entity.confirmed = event.params.confirmed
  entity.creator = event.params.creator

  entity.save()
}

export function handleuserUpdatedScore(event: userUpdatedScoreEvent): void {
  let entity = User.load(event.params.id.toString());

  if (entity == null){
    entity = new User(event.params.id.toString());
  }

  entity.score = event.params.score

  entity.save()
}

export function handleuserUpdatedOverScore(
  event: userUpdatedOverScoreEvent
): void {
  let entity = User.load(event.params.id.toString());

  if (entity == null){
    entity = new User(event.params.id.toString());
  }
 
  entity.overall_score = event.params.overall_score

  entity.save()
}
