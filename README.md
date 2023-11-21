https://saunindm.github.io/ahj-homeworks-02-1/

## Build Status

![CI](https://github.com/saunindm/ahj-homeworks-02-1/actions/workflows/web.yml/badge.svg)

[![Build status](https://ci.appveyor.com/api/projects/status/pvmf6gpuagqed2hk?svg=true)](https://ci.appveyor.com/project/saunindm/ahj-homeworks-02-1)


# Домашнее задание к занятию "2. DOM"

### Перемещение элемента

#### Легенда

Вы решили развлечься и реализовать некое подобие игры, где гномы (или другие существа), выскакивают из "отверстий" и по ним нужно бить молотком:

![](./pic/GracefulMiniatureBustard-small.gif)

Copyright gfycat.com

#### Описание

Соберите инфраструктуру проекта на базе Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Поскольку мы более гуманны, вам нужно реализовать лишь первую часть этой игры - перемещение объекта в DOM Tree.

Для этого самостоятельно разработайте игровое поле 4x4 и персонажа в виде картинки `img` (при загрузке страницы должен программно генерироваться и ставиться в рандомную позицию внутри игрового поля). С помощью функции `setInterval` запланируйте перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).

Для картинки персонажа используйте следующую:

![](./pic/goblin.png)

Важно: не используйте `removeChild`! Проверьте, что будет, если `Node` изменить родителя.

Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.