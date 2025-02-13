import { readCSTypes } from "./lib/files.mjs";
import { copyImageFile, readJSONFile, writeJSONFile } from "./lib/out.mjs";

const bacteriasSrc = await readJSONFile("./out/bacteria.json");
const skillsSrc = await readJSONFile("./out/skill.json");
const factionsSrc = await readJSONFile("./out/faction.json");
const skillPoolsSrc = await readJSONFile("./out/skillPool.json");
const troopAbilitiesSrc = await readJSONFile("./out/troopAbility.json");
const artifactsSrc = await readJSONFile("./out/artifact.json");
const termMapSrc = await readJSONFile("./out/termMap.json");
const iconsSrc = await readJSONFile("./out/icons.json");
const spellsSrc = await readJSONFile("./out/spell.json");
const battleMapEntitySrc = await readJSONFile("./out/battleMapEntity.json");
const genericRandomEventsSrc = await readJSONFile(
  "./out/genericRandomEvents.json"
);
const arleonRandomEventsSrc = await readJSONFile(
  "./out/arleonRandomEvents.json"
);
const lothRandomEventsSrc = await readJSONFile("./out/lothRandomEvents.json");
const baryaRandomEventsSrc = await readJSONFile("./out/baryaRandomEvents.json");
const ranaRandomEventsSrc = await readJSONFile("./out/ranaRandomEvents.json");

const adventureMapEntitySrc = await readJSONFile(
  "./out/adventureMapEntity.json"
);

await writeJSONFile(termMapSrc, "../../lib/collections/termMap");

const resourceTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Economy/ResourceType.cs"
);
const UNIT_TYPES = ["vanilla", "upgraded", "superUpgraded"];

const essenceTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Gamestate/EssenceType.cs"
);
const spellTargetTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Spells/SpellTargetType.cs"
);
const spellEffectTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Spells/SpellEffectType.cs"
);
const spellTeleportDestinationsTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Spells/SpellTeleportDestination.cs"
);
const bacteriaDurationTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Bacterias/BacteriaDurationType.cs"
);
const spellDurationTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Spells/SpellDurationType.cs"
);
const genericBacteriaCustomEffectTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Server/Bacterias/GenericBacteriaCustomEffect.cs"
);
const randomEventTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Adventure/RandomEventType.cs"
);
const randomEventEvaluationTriggerTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Adventure/RandomEventEvaluationTrigger.cs"
);
const randomEventRequirementEvaluationTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Adventure/RandomEventRequirementEvaluationType.cs"
);
const randomEventRequirementTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Adventure/RandomEventRequirementType.cs"
);
const randomEventRecipientTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Adventure/RandomEventRecipient.cs"
);
const adventureMapEntitiesTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/AutoGeneratedDef/SongsOfConquest/AdventureMapEntities.cs"
);
const artifactTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/AutoGeneratedDef/SongsOfConquest/ArtifactTypes.cs"
);
const runtimeRewardTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Rewards/RuntimeRewardType.cs"
);
const runtimePenaltyTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Penalties/RuntimePenaltyType.cs"
);
const runtimePenaltyHostileSpawnLocationTypes = await readCSTypes(
  "./SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Penalties/RuntimePenaltyHostileSpawnLocation.cs"
);
const SKILL_POOL_EVALUATION = ["LevelRange", "LevelInterval"];

const factions = factionsSrc.map((factionSrc) => ({
  id: factionSrc.id,
  type: factionSrc.type,
  languageKey: factionSrc.languageKey,
  bannerSprite: factionSrc.bannerSprite,
  symbolSprite: factionSrc.symbolSprite,
  wielderFrames: factionSrc.wielderFrames,
  commanders: factionSrc.commanders
    .filter((commander) => commander.type && commander.usageType === 0)
    .map((commander) => ({
      type: commander.type,
      portrait: {
        name: commander.portrait.name,
        spriteSheet: commander.portrait.spriteSheet,
        x: commander.portrait.x,
        y: commander.portrait.y,
        width: commander.portrait.width,
        height: commander.portrait.height,
      },
    })),
  units: factionSrc.units.map((unit) => ({
    vanilla: {
      languageKey: unit.vanilla.languageKey,
      sprite: unit.vanilla.visuals?.prefab.sprite,
      adventureSprite: unit.vanilla.visuals?.adventurePrefab.sprite,
    },
    upgraded: unit.upgraded.languageKey
      ? {
          languageKey: unit.upgraded.languageKey,
          sprite: unit.upgraded.visuals?.adventurePrefab.sprite,
        }
      : null,
    superUpgraded: unit.superUpgraded.languageKey
      ? {
          languageKey: unit.superUpgraded.languageKey,
          sprite: unit.superUpgraded.visuals?.adventurePrefab.sprite,
        }
      : null,
  })),
}));

await writeJSONFile(factions, "../../lib/collections/factions");

for (const faction of factions) {
  await copyImageFile(faction.bannerSprite.spriteSheet, "../public/factions");
  for (const wielderFrame of faction.wielderFrames) {
    await copyImageFile(wielderFrame.spriteSheet, "../public/factions");
  }
}

const getBacteria = ({ bacteriaType, duration }) => {
  const bacteria = bacteriasSrc.find(
    (bacteriaSrc) => bacteriaSrc.id === bacteriaType
  );
  if (!bacteria) {
    return null;
  }
  const result = {
    bacteriaType: bacteria.id,
    type: bacteria.type,
    restriction: bacteria.restriction,
    customEffect: genericBacteriaCustomEffectTypes[bacteria.customEffect],
    customEffectValue: bacteria.customEffectValue,
    secondaryCustomEffectValue: bacteria.secondaryCustomEffectValue,
    auraSettings: bacteria.auraSettings,
    modifierData: [],
    resourcesIncome:
      bacteria.income?.resources.map((resource) => ({
        type: resourceTypes[resource.type],
        amount: resource.amount,
        allTimeAmount: resource.allTimeAmount,
      })) || [],
    duration: duration,
  };

  if (
    typeof duration.duration !== "undefined" &&
    typeof duration.type === "undefined"
  ) {
    console.log(bacteriaType, duration);
  }

  if (bacteria.auraSettings?.bacteriaToAdd?.bacteriaType) {
    const bacteriaToAdd = getBacteria({
      bacteriaType: bacteria.auraSettings.bacteriaToAdd.bacteriaType,
      duration: {
        type:
          typeof bacteria.auraSettings.bacteriaToAdd.duration.type === "number"
            ? bacteriaDurationTypes[
                bacteria.auraSettings.bacteriaToAdd.duration.type
              ]
            : bacteria.auraSettings.bacteriaToAdd.duration.type,
        duration: bacteria.auraSettings.bacteriaToAdd.duration.duration,
      },
    });
    if (bacteriaToAdd) {
      result.auraSettings.bacteriaToAdd = bacteriaToAdd;
      bacteriaToAdd.modifierData =
        bacteriaToAdd.modifierData?.map((modifier) => ({
          type: modifier.type,
          modifier: modifier.modifier,
          amountToAdd: modifier.amountToAdd,
          applicationType: modifier.applicationType,
        })) || [];
    } else {
      result.auraSettings.bacteriaToAdd = null;
    }
  } else {
    if (result.auraSettings) {
      result.auraSettings.bacteriaToAdd = null;
    }
    result.modifierData =
      bacteria.modifierData?.map((modifier) => ({
        type: modifier.type,
        modifier: modifier.modifier,
        amountToAdd: modifier.amountToAdd,
        applicationType: modifier.applicationType,
      })) || [];
  }

  if (bacteria.settings?.bacterias) {
    result.settings = {
      bacterias: bacteria.settings.bacterias.map((bacteria) =>
        getBacteria({
          bacteriaType: bacteria.bacteriaType,
          duration: {
            type: bacteriaDurationTypes[bacteria.duration.type],
            duration: bacteria.duration.duration,
          },
        })
      ),
    };
  }
  if (bacteria.settings?.bacteriaToAddWhenMoving) {
    result.settings = {
      bacteriaToAddWhenMoving: getBacteria({
        bacteriaType: bacteria.settings.bacteriaToAddWhenMoving,
        duration: {
          type: bacteriaDurationTypes[
            bacteria.settings.durationOfBacteriaToAdd.type
          ],
          duration: bacteria.settings.durationOfBacteriaToAdd.duration,
        },
      }),
    };
  }
  return result;
};

const getSimpleSkill = ({ skill, level }) => {
  const skillSrc = skillsSrc.find((skillSrc) => skillSrc.id === skill);
  return {
    type: skillSrc.type,
    level: level,
  };
};

const getUnit = ({ factionIndex, unitIndex, upgradeType }) => {
  const unitType = UNIT_TYPES[upgradeType];
  return factions[factionIndex].units[unitIndex][unitType];
};
const wielders = factionsSrc
  .map((factionSrc) =>
    factionSrc.commanders
      .filter((commander) => commander.type && commander.usageType === 0)
      .map((commander) => {
        const skillPool = skillPoolsSrc.find(
          (skillPoolSrc) => skillPoolSrc.id === commander.skillPool
        );

        const startingSkills = commander.skills.map(getSimpleSkill);

        const skillPools = skillPool.pools.map((pool) => ({
          name: pool.name,
          evaluationType: SKILL_POOL_EVALUATION[pool.evaluationType],
          levelRange: pool.levelRange,
          levelIntervalStartLevel: pool.levelIntervalStartLevel,
          levelInterval: pool.levelInterval,
          skills: pool.skills.map((skill) => {
            const type = skillsSrc.find(
              (skillSrc) => skillSrc.id === skill.skill
            ).type;
            return {
              type: type,
              requiresSkill: skill.requiresSkill ? true : false,
              requirementType:
                skill.requirementType === 0 ? "RequireAny" : "RequireAll",
              requiredSkills: skill.requiredSkills.map(getSimpleSkill),
            };
          }),
        }));

        return {
          type: commander.type,
          faction: factionSrc.languageKey,
          portrait: {
            name: commander.portrait.name,
            spriteSheet: commander.portrait.spriteSheet,
            x: commander.portrait.x,
            y: commander.portrait.y,
            width: commander.portrait.width,
            height: commander.portrait.height,
          },
          stats: {
            defense: commander.stats.defense,
            offense: commander.stats.offense,
            movement: commander.stats.movement,
            viewRadius: commander.stats.viewRadius,
            command: commander.stats.command,
          },
          startingSkills: startingSkills,
          skillPools: skillPools,
          units: commander.units.map((unit) => ({
            languageKey: getUnit(unit).languageKey,
            size: unit.size,
          })),
          specializations: commander.specializations.map((bacteria) =>
            getBacteria({
              bacteriaType: bacteria.bacteriaType,
              duration: {
                type: bacteriaDurationTypes[bacteria.duration.type],
                duration: bacteria.duration.duration,
              },
            })
          ),
        };
      })
  )
  .flat();

await writeJSONFile(wielders, "../../lib/collections/wielders");

for (const wielder of wielders) {
  await copyImageFile(wielder.portrait.spriteSheet, "../public/wielders");
}

const getTroopAbility = (id) => {
  const ability = troopAbilitiesSrc.find((ability) => ability.id === id);
  if (ability.type === "None") {
    return null;
  }
  return {
    type: ability.type,
    icon: ability.icon,
    bacterias: ability.bacterias.map((bacteria) =>
      getBacteria({
        bacteriaType: bacteria.bacteriaType,
        duration: {
          type: bacteriaDurationTypes[bacteria.duration.type],
          duration: bacteria.duration.duration,
        },
      })
    ),
  };
};

const getUnitType = (type) => ({
  languageKey: type.languageKey,
  sprite: type.visuals.prefab.sprite,
  purchaseCost: {
    costEntries: type.purchaseCost.costEntries.map((costEntry) => ({
      type: resourceTypes[costEntry.type],
      amount: costEntry.amount,
    })),
  },
  obsoleteGoldCost: type.obsoleteGoldCost,
  stats: type.stats,
  troopAbility: getTroopAbility(type.troopAbility),
  bacterias: type.bacterias.map((bacteria) =>
    getBacteria({
      bacteriaType: bacteria.bacteriaType,
      duration: {
        type: bacteriaDurationTypes[bacteria.duration.type],
        duration: bacteria.duration.duration,
      },
    })
  ),
});
const units = factionsSrc
  .map((factionSrc) =>
    factionSrc.units.map((unit) => ({
      faction: factionSrc.languageKey,
      vanilla: getUnitType(unit.vanilla),
      upgraded: unit.upgraded.languageKey ? getUnitType(unit.upgraded) : null,
      superUpgraded: unit.superUpgraded.languageKey
        ? getUnitType(unit.superUpgraded)
        : null,
    }))
  )
  .flat();

await writeJSONFile(units, "../../lib/collections/units");
for (const unit of units) {
  await copyImageFile(unit.vanilla.sprite.spriteSheet, "../public/units");
  if (unit.upgraded) {
    await copyImageFile(unit.upgraded.sprite.spriteSheet, "../public/units");
  }
  if (unit.superUpgraded) {
    await copyImageFile(
      unit.superUpgraded.sprite.spriteSheet,
      "../public/units"
    );
  }
}

const skills = skillsSrc.map((skillSrc) => ({
  type: skillSrc.type,
  icon: skillSrc.icon,
  levels: skillSrc.levels.map((level) => {
    const levelBacteria = level.bacterias[0];
    return getBacteria({
      bacteriaType: levelBacteria.type,
      duration: {
        type: bacteriaDurationTypes[levelBacteria.duration.type],
        duration: levelBacteria.duration.duration,
      },
    });
  }),
}));

await writeJSONFile(skills, "../../lib/collections/skills");
for (const skill of skills) {
  await copyImageFile(skill.icon.spriteSheet, "../public/skills");
}

const skillPools = skillPoolsSrc.map((skillPool) => ({
  id: skillPool.id,
  type: skillPool.type,
  pools: skillPool.pools,
}));

await writeJSONFile(skillPools, "../../lib/collections/skillPools");

const artifacts = artifactsSrc.map((artifact) => ({
  id: artifact.id,
  type: artifact.type,
  icon: artifact.icon,
  bacterias: artifact.bacterias.map((bacteria) =>
    getBacteria({
      bacteriaType: bacteria.bacteriaType,
      duration: {
        type: bacteriaDurationTypes[bacteria.duration.type],
        duration: bacteria.duration.duration,
      },
    })
  ),
}));

await writeJSONFile(artifacts, "../../lib/collections/artifacts");
for (const artifact of artifacts) {
  await copyImageFile(artifact.icon.spriteSheet, "../public/artifacts");
}

await writeJSONFile(iconsSrc, "../../lib/collections/icons");
for (const icon of iconsSrc) {
  await copyImageFile(icon.spriteSheet, "../public/icons");
}

const getStack = (stack) => ({
  nameKey: stack.nameKey,
  descriptionKey: stack.descriptionKey,
  icon: stack.icon,
  research: stack.research.map((research) => ({
    id: research.id,
    nameKey: research.nameKey,
    descriptionKey: research.descriptionKey,
    costEntries: research.requirements.cost.costEntries.map((costEntry) => ({
      type: resourceTypes[costEntry.type],
      amount: costEntry.amount,
    })),
    bacterias: research.bacterias.map((bacteria) =>
      getBacteria({
        bacteriaType: bacteria.bacteriaType,
        duration: {
          type: spellDurationTypes[bacteria.duration.type],
          duration: bacteria.duration.value,
        },
      })
    ),
  })),
});
// extractor/SongsOfConquest/ExportedProject/Assets/Scripts/Lavapotion.SongsOfConquest.GameLogicLayer.Runtime/SongsOfConquest/Common/Entities/MapEntityCategory.cs
const MAP_ENTITY_CATEGORY_BUILDING = 97;

const buildSites = adventureMapEntitySrc.filter((buildSite) =>
  [MAP_ENTITY_CATEGORY_BUILDING].includes(buildSite.category)
);
const buildings = [];
for (const buildSite of buildSites) {
  let factionId = 0;
  if (buildSite.nameKey.startsWith("Arleon")) {
    factionId = 1;
  } else if (buildSite.nameKey.startsWith("Loth")) {
    factionId = 2;
  } else if (buildSite.nameKey.startsWith("Barya")) {
    factionId = 3;
  } else if (buildSite.nameKey.startsWith("Rana")) {
    factionId = 4;
  }
  const building = {
    id: buildSite.id,
    factionId: factionId,
    buildSite: buildSite.nameKey,
    nameKey: buildSite.nameKey,
    descriptionKey: buildSite.descriptionKey,
    portraits: buildSite.portraitSettings.map(
      (portraitSetting) => portraitSetting.portrait
    ),
  };

  for (const component of buildSite.components) {
    if (component.baseViewRadius) {
      building.baseViewRadius = component.baseViewRadius;
    }
    if (component.incomeDefinition?.incomePerLevel) {
      building.incomePerLevel = component.incomeDefinition.incomePerLevel.map(
        (incomePerLevel) => ({
          level: incomePerLevel.level,
          resources: incomePerLevel.definition.resources.map((resource) => ({
            type: resourceTypes[resource.type],
            amount: resource.amount,
          })),
          troopIncomes: incomePerLevel.definition.troopIncomes.map(
            (troopIncome) => {
              const faction = factionsSrc[troopIncome.reference.factionIndex];
              const upgradeType = UNIT_TYPES[troopIncome.reference.upgradeType];

              const unit =
                faction.units[troopIncome.reference.unitIndex][upgradeType];
              return {
                factionKey: faction.languageKey,
                upgradeType,
                unitKey: unit.languageKey,
                size: troopIncome.reference.size,
                requiredResearch: troopIncome.requiredResearch,
                initialInstantIncome: troopIncome.initialInstantIncome,
              };
            }
          ),
        })
      );
    }

    if (component.levelUpgrades) {
      building.levelUpgrades = component.levelUpgrades.map((levelUpgrade) => ({
        costEntries: levelUpgrade.requirements.cost.costEntries.map(
          (costEntry) => ({
            type: resourceTypes[costEntry.type],
            amount: costEntry.amount,
          })
        ),
        requiredBuildings: levelUpgrade.requirements.requiredBuildings.map(
          (requiredBuilding) => requiredBuilding.entity
        ),
      }));
    }

    if (component.requirements) {
      building.requirements = {
        costEntries: component.requirements.cost.costEntries.map(
          (costEntry) => ({
            type: resourceTypes[costEntry.type],
            amount: costEntry.amount,
          })
        ),
        requiredBuildings: component.requirements.requiredBuildings.map(
          (requiredBuilding) => requiredBuilding.entity
        ),
      };
    }

    if (component.maxGarrison) {
      building.maxGarrison = component.maxGarrison;
    }

    if (component.actionProviders) {
      for (const actionProvider of component.actionProviders) {
        if (actionProvider.availableBuildings) {
          building.availableBuildings = actionProvider.availableBuildings.map(
            (availableBuilding) => ({
              factionId: availableBuilding.factionId,
              availableMapEntities: availableBuilding.availableMapEntities.map(
                (availableMapEntity) => ({
                  id: availableMapEntity.mapEntityBlueprint.id,
                })
              ),
            })
          );
        }

        if (actionProvider.stacks) {
          building.stacks = actionProvider.stacks.map(getStack);
        }

        if (actionProvider.categories) {
          for (const actionCategory of actionProvider.categories) {
            if (actionCategory.stacks) {
              if (!building.stacks) {
                building.stacks = [];
              }
              building.stacks.push(...actionCategory.stacks.map(getStack));
            }
          }
        }
      }
    }
  }

  buildings.push(building);
}

await writeJSONFile(buildings, "../../lib/collections/buildings");
for (const building of buildings) {
  for (const portrait of building.portraits) {
    await copyImageFile(portrait.spriteSheet, "../public/buildings");
  }
  if (building.stacks) {
    for (const stack of building.stacks) {
      await copyImageFile(stack.icon.spriteSheet, "../public/icons");
    }
  }
}

const getBattleMapEntity = (id) => {
  const battleMapEntity = battleMapEntitySrc.find(
    (battleMapEntity) => battleMapEntity.id === id
  );
  if (!battleMapEntity) {
    return null;
  }
  const healthComponent = battleMapEntity.components.find(
    (component) => typeof component.health !== "undefined"
  );

  const bacterias = battleMapEntity.bacterias.length
    ? battleMapEntity.bacterias.map((bacteria) =>
        getBacteria({
          bacteriaType: bacteria.bacteriaType,
          duration: {
            type: spellDurationTypes[bacteria.duration.type],
            duration: bacteria.duration.duration,
          },
        })
      )
    : null;
  return {
    nameKey: battleMapEntity.nameKey,
    entityHealthPoints: healthComponent ? healthComponent.health : null,
    bacterias,
  };
};

const spells = spellsSrc.map((spell) => ({
  id: spell.id,
  icon: spell.icon,
  type: spell.type,
  nameKey: spell.nameKey,
  descriptionKey: spell.descriptionKey,
  costs: spell.cost.map((cost) => ({
    type: essenceTypes[cost.type],
    amount: cost.amount,
  })),
  tiers: spell.tiers.map((tier) => ({
    tier: tier.tier,
    effectType: spellEffectTypes[tier.effectType],
    amountOfTargets: tier.amountOfTargets,
    teleportDestination:
      spellTeleportDestinationsTypes[tier.teleportDestination],
    maxTeleportRange: tier.maxTeleportRange,
    circleRadius: tier.circleRadius,
    numberOfTargetTiles: tier.relativeTargetTiles?.length || null,
    target: spellTargetTypes[tier.target],
    requiredCommanderSkills: tier.requiredCommanderSkills.map(getSimpleSkill),
    mapEntityToSummon: tier.mapEntityToSummon
      ? getBattleMapEntity(tier.mapEntityToSummon)
      : null,
    bacterias: tier.bacterias.map((bacteria) =>
      getBacteria({
        bacteriaType: bacteria.bacteriaType,
        duration: {
          type: spellDurationTypes[bacteria.duration.type],
          duration: bacteria.duration.value,
        },
      })
    ),
  })),
}));
await writeJSONFile(spells, "../../lib/collections/spells");
for (const spell of spells) {
  await copyImageFile(spell.icon.spriteSheet, "../public/spells");
}

function analyzeRandomEvents(randomEventsSrc) {
  return randomEventsSrc.map((randomEventSrc) => {
    let {
      type,
      descriptionKey,
      uniqueName,
      eventChainNameKey,
      chanceOfHappening,
      eventEvaluationTrigger,
      recipientArtifactType,
      recipientValue,
      requirementEvaluationType,
      requirements,
      recipientFactionIndex,
      recipientUnitIndex,
      recipientTroopUpgradeType,
      eventRecipient,
      reward,
      penalty,
    } = randomEventSrc.randomEventData;
    const rewards = reward;
    const penalties = penalty;
    const faction = uniqueName.split("/").shift();
    const name = uniqueName.split("/").pop();

    return {
      id: `${faction}/${name}`,
      uniqueName,
      descriptionKey,
      faction,
      eventChainNameKey,
      eventType: randomEventTypes[type],
      name,
      chanceOfHappening,
      eventEvaluationTrigger:
        randomEventEvaluationTriggerTypes[eventEvaluationTrigger],
      requirementEvaluationType:
        randomEventRequirementEvaluationTypes[requirementEvaluationType],
      recipientArtifactType: artifactTypes[recipientArtifactType],
      recipientValue,
      recipientFactionIndex,
      recipientUnitIndex,
      recipientTroopUpgradeType: UNIT_TYPES[recipientTroopUpgradeType],
      requirements: requirements.map((requirement) => {
        const adventureMapEntity =
          requirement.entityType &&
          adventureMapEntitySrc.find(
            (adventureMapEntity) =>
              adventureMapEntity.type ===
              adventureMapEntitiesTypes[requirement.entityType]
          );
        return {
          eventReference: requirement.eventReference,
          value: requirement.value,
          factionIndex: requirement.factionIndex,
          unitIndex: requirement.unitIndex,
          resourceType: resourceTypes[requirement.resourceType],
          artifactType: artifactTypes[requirement.artifactType],
          entityType: adventureMapEntity && {
            nameKey: adventureMapEntity.nameKey,
          },
          requirementType:
            randomEventRequirementTypes[requirement.requirementType],
        };
      }),
      eventRecipient: randomEventRecipientTypes[eventRecipient],
      rewards: rewards.rewardDataList.map((reward) => {
        return {
          rewardType: runtimeRewardTypes[reward.rewardType],
          experience: reward.experience,
          troopRewards: reward.troopReward.troops.map((troop) => ({
            faction: factions[troop.factionIndex].languageKey,
            name: factions[troop.factionIndex].units[troop.unitIndex][
              UNIT_TYPES[troop.upgradeType]
            ]?.languageKey,
            size: troop.size,
          })),
          resourceReward: {
            type: resourceTypes[reward.resourceReward.type],
            amountMinMax: reward.resourceReward.amountMinMax,
          },
          bacteriaReward: getBacteria({
            bacteriaType: reward.bacteriaReward.type,
            duration: {
              type: bacteriaDurationTypes[reward.bacteriaReward.duration.type],
              duration: reward.bacteriaReward.duration.duration,
            },
          }),
          artifactReward: reward.artifactReward
            ? artifactTypes[reward.artifactReward]
            : null,
          randomArtifact: reward.randomArtifact,
          levelReward: reward.levelReward,
        };
      }),
      penalties: penalties.penaltyDataList.map((penalty) => {
        return {
          penaltyType: runtimePenaltyTypes[penalty.penaltyType],
          resourcePenalty: {
            type: resourceTypes[penalty.resourcePenalty.type],
            amountMinMax: penalty.resourcePenalty.amountMinMax,
          },
          destroyOwnedBuilding: {
            buildingToDestroy:
              buildings.find(
                (building) =>
                  building.id === penalty.destroyOwnedBuilding.buildingToDestroy
              )?.nameKey ?? "",
            destroyAll: penalty.destroyOwnedBuilding.destroyAll,
            amount: penalty.destroyOwnedBuilding.amount,
          },
          // There is no CreateHostile penalty type right now
          // createHostile: penalty.createHostile,
          createRandomHostile: {
            spawnLocation:
              runtimePenaltyHostileSpawnLocationTypes[
                penalty.createRandomHostile.spawnLocation
              ],
            amountOfHostiles: penalty.createRandomHostile.amountOfHostiles,
          },
          reduceRecruitmentPool: {
            troopsToReduce: penalty.reduceRecruitmentPool.troopsToReduce.map(
              (troop) => ({
                faction: factions[troop.factionIndex].languageKey,
                name: factions[troop.factionIndex].units[troop.unitIndex][
                  UNIT_TYPES[troop.upgradeType]
                ]?.languageKey,
              })
            ),
            percentage: penalty.reduceRecruitmentPool.percentage,
          },
        };
      }),
    };
  });
}
const randomEvents = analyzeRandomEvents(genericRandomEventsSrc).concat(
  analyzeRandomEvents(arleonRandomEventsSrc),
  analyzeRandomEvents(lothRandomEventsSrc),
  analyzeRandomEvents(baryaRandomEventsSrc),
  analyzeRandomEvents(ranaRandomEventsSrc)
);
await writeJSONFile(randomEvents, "../../lib/collections/randomEvents");
