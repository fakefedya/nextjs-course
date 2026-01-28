import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	distDir: 'public_html',
	/* config options here */
	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgo: true,
							svgoConfig: {
								plugins: [
									{
										name: 'preset-default',
										params: {
											overrides: {
												removeViewBox: false,
											},
										},
									},
								],
							},
						},
					},
				],
				as: '*.js',
			},
		},
	},
	reactCompiler: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.vkcs.cloud',
				port: '',
				pathname: '/uploads/**',
			},
		],
	},
}

export default nextConfig
