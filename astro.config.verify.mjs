// @ts-check
// Config de vérification locale : même config que prod, mais outDir séparé
// pour éviter les conflits de permissions sur dist/ (fichiers root du 03/11).
import base from './astro.config.mjs';

export default {
	...base,
	outDir: 'dist-verify',
};
