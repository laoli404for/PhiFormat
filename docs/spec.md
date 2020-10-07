# 规范文档

## PhiFormat 总体一览

```
(object) ->
    $schema (string)
    timing (object) ->
        offset (number)
        bpmList (array) ->
            (object) ->
                id (integer)
                time (integer)
                bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            eventList (array) ->
                (object) ->
                    id (integer)
                    type (string) // Or integer? Need further discussion.
                    startTime (integer)
                    endTime (integer)
                    properties (object) ->
                        (...)
            speedList (array) ->
                (object) ->
                    id (integer)
                    time (integer)
                    speed (number)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // This can be integer since notes have only 4 types.
                    startTime (integer)
                    endTime (integer)
                    holdTime (number, optional)
                    relativeX (number)
                    side (integer) // Should be 1 or -1.
                    speed (number, optional)
                    isFake (bool)
```

## 数据结构

### TypeScript

```typescript
export interface BpmData {
  id: number;
  time: number;
  bpm: number;
}

export interface TimingData {
  offset: number;
  bpmList: BpmData[];
}

type Ease =
  'linear'    |
  'backIn'    | 'backOut'    |
  'bounceIn'  | 'bounceOut'  |
  'circIn'    | 'circOut'    |
  'cubicIn'   | 'cubicOut'   |
  'elasticIn' | 'elasticOut' |
  'expoIn'    | 'expoOut'    |
  'quadIn'    | 'quadOut'    |
  'quartIn'   | 'quartOut'   |
  'quintIn'   | 'quintOut'   |
  'sineIn'    | 'sineOut'    ;

interface BaseEventData {
  id: number;
  type: string;
  startTime: number;
  endTime: number;
  properties: {};
}

interface MoveEventData extends BaseEventData {
  type: 'move';
  properties: {
    x: number;
    y: number;
    easeX: Ease;
    easeY: Ease;
  };
}

interface RotateEventData extends BaseEventData {
  type: 'rotate';
  properties: {
    angle: number;
    ease: Ease;
  };
}

interface FadeEventData extends BaseEventData {
  type: 'fade';
  properties: {
    alpha: number;
    ease: Ease;
  };
}

export type EventData = MoveEventData | RotateEventData | FadeEventData;

export interface SpeedData {
  id: number;
  time: number;
  speed: number;
}

interface BaseNoteData {
  id: number;
  type: string;
  startTime: number;
  endTime: number;
  relativeX: number;
  side: 1 | -1;
  speed?: number;
  isFake: boolean;
}

interface ClickNoteData extends BaseNoteData {
  type: 'click';
}

interface FlickNoteData extends BaseNoteData {
  type: 'flick';
}

interface DragNoteData extends BaseNoteData {
  type: 'drag';
}

interface HoldNoteData extends BaseNoteData {
  type: 'hold';
  holdTime: number;
}

export type NoteData = ClickNoteData | FlickNoteData | DragNoteData | HoldNoteData;

export interface JudgeLineData {
  id: number;
  eventList: EventData[];
  speedList: SpeedData[];
  noteList: NoteData[];
}

export interface ChartData {
  timing: TimingData;
  judgeLineList: JudgeLineData[];
}
```
