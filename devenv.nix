{
	pkgs,
	lib,
	config,
	inputs,
	...
}: {
	languages.javascript = {
		enable = true;
		package = pkgs.nodejs-slim; # 24.13.0 at time of writing
		lsp.enable = false;
		yarn = {
			enable = true;
			install.enable = false; # TODO
		};
	};

}
