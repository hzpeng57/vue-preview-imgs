#!/bin/bash

# 可以发布则返回 0
if
  npx can-npm-publish $PWD/packages/vue-preview-imgs --verbose;
then
  exit 0;
fi
# 没有包可以发布
exit 1;
