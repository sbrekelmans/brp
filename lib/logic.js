'use strict';

/**
 * Sample transaction
 * @param {org.brp.CreateClaim} CreateClaim 
 * @transaction
 */
async function CreateClaim(application) {
    const factory = getFactory();
    const namespace = 'org.brp';

    const createclaim = factory.newResource(namespace, 'Claim', application.claimId);
    createclaim.eigenaar = factory.newRelationship(namespace, 'Entiteit', application.eigenaar.getIdentifier());
    createclaim.verificator = factory.newRelationship(namespace, 'Entiteit', application.verificator.getIdentifier());
    createclaim.ClaimContent = application.ClaimContent
    createclaim.Hash = application.Hash
    createclaim.SignedClaim = application.Hash

    //save the application
    const assetRegistry = await getAssetRegistry(createclaim.getFullyQualifiedType());
    await assetRegistry.add(createclaim);

    // emit event
    const applicationEvent = factory.newEvent(namespace, 'CreateClaimEvent');
    applicationEvent.claim = createclaim;
    console.log("event getriggered: "+createclaim.claimId);
    emit(applicationEvent);
}