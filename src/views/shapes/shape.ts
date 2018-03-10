import { Rect } from 'zrender'
import { stage } from '../stage'

export type Matrix = number[][]  // 矩阵

export default abstract class Shape {

  public abstract color: string

  public abstract matrix: Matrix

  public static TOP = 0
  public static RIGHT = 1
  public static BOTTOM = 2
  public static LEFT = 3

  public render (): void {
    var block = new Rect({

    })
    stage.add(block)
  }


}