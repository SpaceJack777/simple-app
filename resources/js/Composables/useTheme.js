import resolveConfig from "tailwindcss/resolveConfig"
import { h } from "vue"
import tailwindConfig from "/tailwind.config.js"

import AppView from "@/App.vue"

export const renderApp = (App, props) =>
    h(AppView, null, {
        default: () => h(App, props),
    })

export default () => {
    /**
     * @type {import('tailwindcss').Config}
     */
    const { theme } = resolveConfig(tailwindConfig)

    /**
     * @type {import('naive-ui').GlobalThemeOverrides['Select']['peers']['InternalSelection']}
     */
    const InternalSelection = {
        caretColor: theme.colors.indigo[500],
        borderHover: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[400]}`,
        borderFocus: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[500]}`,
        borderActive: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[500]}`,
        boxShadowFocus: `0 0 2px 2px ${theme.colors.indigo[100]}`,
        boxShadowActive: `0 0 2px 2px ${theme.colors.indigo[100]}`,
    }

    /**
     * @type {import('naive-ui').GlobalThemeOverrides}
     */
    const overrides = {
        common: {
            borderRadius: theme.borderRadius.md,
            primaryColor: theme.colors.gray[800],
            primaryColorHover: theme.colors.gray[700],
            primaryColorPressed: theme.colors.gray[600],
            infoColor: theme.colors.indigo[500],
            infoColorHover: theme.colors.indigo[400],
            infoColorPressed: theme.colors.indigo[300],
        },
        Button: {
            color: "#FFF",
            colorHover: "#FFF",
            paddingMedium: theme.padding[4],
            borderRadiusTiny: theme.borderRadius.md,
            borderRadiusSmall: theme.borderRadius.md,
            borderRadiusMedium: theme.borderRadius.md,
            borderRadiusLarge: theme.borderRadius.md,

            textColorTextHover: theme.colors.indigo[500],

            colorError: theme.colors.red[600],
            colorHoverError: theme.colors.red[500],
            colorFocusError: theme.colors.red[500],
        },
        Input: {
            borderHover: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[400]}`,
            borderRadius: theme.borderRadius.md,
            caretColor: theme.colors.indigo[500],
            borderFocus: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[500]}`,
            boxShadowFocus: `0 0 2px 2px ${theme.colors.indigo[100]}`,
        },
        Select: {
            peers: {
                InternalSelection,
            },
        },
        TreeSelect: {
            peers: {
                InternalSelection,
            },
        },
        Form: {
            labelFontSizeTopMedium: theme.fontSize.sm[0],
            labelHeightMedium: "auto",
            feedbackFontSizeMedium: theme.fontSize.xs[0],
            feedbackHeightMedium: theme.height[4.5],

            labelFontSizeTopLarge: theme.fontSize.sm[0],
            labelHeightLarge: "auto",
            feedbackFontSizeLarge: theme.fontSize.xs[0],
            feedbackHeightLarge: theme.height[5],
            feedbackPadding: `${theme.padding[0.5]} 0`,

            blankHeightLarge: "auto",

            labelTextColor: theme.colors.gray[700],
            labelFontWeight: theme.fontWeight.medium,
            labelPaddingVertical: `0 0 ${theme.padding[1]}`,
        },

        DataTable: {
            paginationMargin: 0,
            peers: {
                Pagination: {
                    itemPaddingMedium: theme.padding[4],
                    itemMarginMedium: 0,
                    itemBorderRadius: 0,

                    itemColor: theme.colors.white,
                    itemColorHover: theme.colors.gray[50],
                    itemBorder: `${theme.borderWidth.DEFAULT} solid ${theme.colors.gray[300]}`,
                    itemBorderHover: `${theme.borderWidth.DEFAULT} solid ${theme.colors.gray[300]}`,

                    itemColorActive: theme.colors.indigo[50],
                    itemColorActiveHover: theme.colors.gray[50],
                    itemBorderActive: `${theme.borderWidth.DEFAULT} solid ${theme.colors.indigo[500]}`,
                    itemTextColorActive: theme.colors.indigo[600],
                },
            },
        },

        Pagination: {
            buttonColor: theme.colors.gray[100],
            buttonColorHover: theme.colors.gray[200],
            buttonColorPressed: theme.colors.gray[300],

            itemColor: theme.colors.gray[100],
            itemColorPressed: theme.colors.gray[300],
            itemColorHover: theme.colors.gray[200],

            itemColorActive: theme.colors.indigo[100],
            itemColorActiveHover: theme.colors.indigo[100],
            itemTextColorActive: theme.colors.indigo[500],

            itemBorder: `0px`,
            itemBorderHover: `0px`,
            itemBorderPressed: `0px`,
            itemBorderActive: `0px`,
            itemBorderDisabled: `0px`,
            buttonBorder: `0px`,
            buttonBorderHover: `0px`,
            buttonBorderPressed: `0px`,
        },

        Switch: {
            railColor: theme.colors.gray[300],
            // boxShadowFocus: `0 0 20px 0 ${theme.colors.indigo[500]}`,
            boxShadowFocus: `0 0 0 1px ${theme.colors.gray[400]}`,
        },

        Layout: {
            color: theme.colors.gray[50],
        },
    }

    return { theme, overrides }
}
