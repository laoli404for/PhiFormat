PX = pnpx

build: build-spec
	mkdocs build

build-spec:
	$(PX) @adobe/jsonschema2md -d schemas -o docs/specs -h false
	rm -r out
