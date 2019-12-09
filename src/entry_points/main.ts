import * as p5 from "p5"
import { Gene } from "../classes/gene"
import { GeneticLife, Life } from "../classes/life"
import { Vector } from "../classes/physics"
import { Terrain, VanillaTerrain } from "../classes/terrain"
import { PredPreyWorld, World } from "../classes/world"
import { random } from "../utilities"

const main = (p: p5) => {
  let world: World
  const backgroundTransparency = 0xFF
  const fieldWidth = 1200
  const fieldHeight = Math.floor(fieldWidth * 1)
  const worldSize = new Vector(fieldWidth, fieldHeight)
  const worldCenter = worldSize.div(2)
  const gravity = 20
  const friction = 0.99999
  const immobilizedWidth = 0
  const initialEnergy = 100

  p.setup = () => {
    p.createCanvas(fieldWidth, fieldHeight)
    const terrains: Terrain[] = [
      new VanillaTerrain(worldSize, worldCenter, gravity, friction, immobilizedWidth),
    ]
    world = new PredPreyWorld(worldSize, terrains)

    const lives = randomLives(500, worldSize, 1)
    world.addLives(lives)
  }

  p.draw = () => {
    p.fill(0xFF, backgroundTransparency)
    p.rect(0, 0, fieldWidth, fieldHeight) // background() では動作しない

    world.next()
    world.draw(p)
  }

  function randomLives(numberOfLives: number, positionSpace: Vector, velocity?: number | undefined): Life[] {
    const lifeSize = 2
    const lives: GeneticLife[] = []

    for (let i = 0; i < numberOfLives; i += 1) {
      const position = new Vector(random(positionSpace.x), random(positionSpace.y))
      lives.push(new GeneticLife(position, Gene.random(), lifeSize, initialEnergy))
    }
    if (velocity != undefined) {
      lives.forEach(life => {
        life.velocity = new Vector(random(-velocity, velocity), random(-velocity, velocity))
      })
    }

    return lives
  }
}

const sketch = new p5(main)
