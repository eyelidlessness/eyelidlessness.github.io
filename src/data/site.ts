export const BLOG_BASE_PATH = '/blog/';
export const BLOG_PATH = BLOG_BASE_PATH;

export const RESUME_ISOLATION: boolean = true as boolean;
export const RESUME_BASE_PATH = '/resume/';
export const RESUME_PATH = (() => {
	if (RESUME_ISOLATION) {
		return RESUME_BASE_PATH;
	}

	return `${RESUME_BASE_PATH}#resume`;
})();
