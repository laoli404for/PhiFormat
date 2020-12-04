# 基本概念

## 时间单位

### 延迟值（Offset）

TBD

### 节拍（Beat）

**节拍** 是（几乎？）所有音乐共同具有的概念。量化每分钟的节拍数的数值被称作 BPM (Beat Per Minute)。

PhiFormat 设计上支持多 BPM 的音乐。

### Tick：PhiFormat 基本时间单位

**Tick** 是 PhiFormat 中基本的时间单位。

!!! bug
    此块内容需要接受复核。

在 PhiFormat 中，Tick 为整数值，从 0 开始计算。0 tick 被视为曲目的起始（0 second）。每一拍被划分为 72 个 Tick。例如， tick 72 意味第 2 拍的开始。

!!! note "为什么每一拍被划分为 72 个 tick？"
    很简单：`8*9=72`。

    将一个拍数以 3 和 4 的倍数进行划分，将会带给谱面创作者极大的便利。为了满足可能的需求，我们将它划分为 8 和 9 的倍数。这应该能满足绝大多数的谱面创作者的需求。

    我们 **强烈不推荐** 将音符放置在比 1/72 更为细致的位置：这样做只会为玩家带来糟糕的体验。如果确实有需要，请考虑对 BPM 进行倍数操作。

## 基准坐标系

## TBD