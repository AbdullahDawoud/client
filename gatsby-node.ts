import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
    const { createPage, createRedirect } = actions;

    createRedirect({
        fromPath: `/`,
        toPath: `/books`,
        redirectInBrowser: true,
        isPermanent: true
    });

    createPage({
        path: '/book/',
        matchPath: `/book/:id`,
        component: resolve('./src/components/book.tsx'),
        context: {}
    });

    createPage({
        path: '/author/',
        matchPath: `/author/:id`,
        component: resolve('./src/components/author.tsx'),
        context: {}
    });

    createPage({
        path: '/authors/',
        matchPath: `/authors/`,
        component: resolve('./src/components/authors-list.tsx'),
        context: {}
    });

    createPage({
        path: '/books/',
        matchPath: `/books/`,
        component: resolve('./src/components/books-list.tsx'),
        context: {}
    });
};

// export const createPage: GatsbyNode['onCreatePage'] = async ({ actions, page }) => {
//     const { createPage } = actions;

//     if (page.path.match(/^\/notebook/)) {
//         page.matchPath = '/notebook/*';

//         // createPage({
//         //     path: '/notebook',
//         //     matchPath: '/notebook/*',
//         //     component: resolve('./src/components/book.tsx'),
//         //     context: {
//         //         //   id: id
//         //     }
//         // });

//         // Update the page.
//         createPage({ ...page, component: resolve('./src/components/book.tsx') });
//     }
// };
