# 规范文档

## 总览

```
(object) ->
    schemaVersion (integer)
    musicOffset (number)
    timingBase (integer)
    bpmList (array) ->
        (object) ->
            id (integer)
            time (integer)
            bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // 1 for tap, 2 for drag, 3 for hold, 4 for click
                    time (integer)
                    holdTime (integer)
                    x (number)
                    width (number)
                    speed (number)
                    side (integer) // 1 -1
                    isFake (boolean)
            props (object) ->
                controlX (array) ->
                    (object) ->
                        id (integer)
                        time (integer)
                        value (number)
                        easing (string)
                controlY ...
                angle ...
                speed ...
                noteAlpha ...
                lineAlpha ...
                displayRange ...
```