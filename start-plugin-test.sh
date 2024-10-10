#!/bin/bash

docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io --plugins.add /sitespeed.io/myplugin -n 1 --compare.saveBaseline --compare.id test_page https://www.example.com/
docker run --rm -v "$(pwd):/sitespeed.io" sitespeedio/sitespeed.io --plugins.add /sitespeed.io/myplugin -n 1 --compare.id test_page https://www.example.com/

