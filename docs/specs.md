# 规范文档

## 总览

```
(object) ->
    $schema (string)
    musicOffset (number)
    timingBase (integer)
    bpmList (array) ->
        (object) ->
            id (integer)
            time (number)
            bpm (number)
    judgeLineList (array) ->
        (object) ->
            id (integer)
            constructTime (number)
            destructTime (number)
            noteList (array) ->
                (object) ->
                    id (integer)
                    type (integer) // 1 for tap, 2 for drag, 3 for hold, 4 for click
                    time (number)
                    holdTime (number)
                    x (number)
                    speed (number)
                    side (integer) // 1 -1
                    isFake (boolean)
            props (object) ->
                controlX (array) ->
                    (object) ->
                        id (integer)
                        time (number)
                        value (number)
                        easing (string)
                controlY ...
                angle ...
                speed ...
                noteAlpha ...
                lineAlpha ...
                displayRange ...
```