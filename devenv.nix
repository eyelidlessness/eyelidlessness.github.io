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

	# Per https://stackoverflow.com/a/74732671, ensuring Python 3.10 is available
	# is intended to address failure of `yarn install --frozen-lockfile` (as seen
	# in CI prior to
	# https://github.com/eyelidlessness/eyelidlessness.github.io/commit/26a1651).
	languages.python = {
		# TODO: config.cloud.ci.github.enable(?)
		# See: https://devenv.sh/cloud/#github-ci-integration
		enable = true;
		version = "3.10";
		lsp.enable = false;
	};
}
