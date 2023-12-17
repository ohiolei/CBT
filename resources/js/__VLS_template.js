import edit from './action/edit.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './index.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'pagination', typeof __VLS_localComponents, "Pagination", "pagination", "pagination"> &
__VLS_WithComponent<'edit', typeof __VLS_localComponents, "Edit", "edit", "edit">;
__VLS_intrinsicElements.section; __VLS_intrinsicElements.section;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.input;
__VLS_intrinsicElements.select; __VLS_intrinsicElements.select;
__VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option; __VLS_intrinsicElements.option;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_intrinsicElements.table; __VLS_intrinsicElements.table;
__VLS_intrinsicElements.thead; __VLS_intrinsicElements.thead;
__VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr; __VLS_intrinsicElements.tr;
__VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th; __VLS_intrinsicElements.th;
__VLS_intrinsicElements.tbody; __VLS_intrinsicElements.tbody;
__VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td; __VLS_intrinsicElements.td;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
__VLS_components.Pagination; __VLS_components.Pagination; __VLS_components.pagination; __VLS_components.pagination;
// @ts-ignore
[pagination, pagination,];
__VLS_components.Edit; __VLS_components.Edit; __VLS_components.edit; __VLS_components.edit;
// @ts-ignore
[edit, edit,];
{
const __VLS_0 = __VLS_intrinsicElements["section"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("container mx-auto p-6 font-mono"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("container mx-auto p-6 font-mono"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("w-full mb-8 overflow-hidden rounded-lg shadow-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("w-full mb-8 overflow-hidden rounded-lg shadow-lg"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("w-full overflow-x-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("w-full overflow-x-auto"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, class: ("p-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, class: ("p-2"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("p-5 flex justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("p-5 flex justify-end"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["input"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, type: ("text"), placeholder: ("Name"), value: ((__VLS_ctx.filter.name)), class: ("mx-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, type: ("text"), placeholder: ("Name"), value: ((__VLS_ctx.filter.name)), class: ("mx-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
}
(__VLS_33.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["div"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
{
const __VLS_45 = __VLS_intrinsicElements["select"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{ onChange: {} as any, }, value: ((__VLS_ctx.filter.role)), class: ("mx-2 px-7 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ onChange: {} as any, }, value: ((__VLS_ctx.filter.role)), class: ("mx-2 px-7 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-100  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
let __VLS_50 = { 'change': __VLS_pickEvent(__VLS_49['change'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_47>).onChange) };
__VLS_50 = { change: (__VLS_ctx.getAllUsers) };
{
const __VLS_51 = __VLS_intrinsicElements["option"];
const __VLS_52 = __VLS_elementAsFunctionalComponent(__VLS_51);
const __VLS_53 = __VLS_52({ ...{}, value: (""), selected: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, value: (""), selected: (true), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
(__VLS_54.slots!).default;
}
for (const [role, index] of __VLS_getVForSourceType((__VLS_ctx.roles)!)) {
{
const __VLS_56 = __VLS_intrinsicElements["option"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, key: ((index)), value: ((role.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, key: ((index)), value: ((role.name)), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
(role.name);
(__VLS_59.slots!).default;
}
// @ts-ignore
[filter, filter, filter, filter, getAllUsers, roles,];
}
(__VLS_48.slots!).default;
}
(__VLS_43.slots!).default;
}
{
const __VLS_61 = __VLS_intrinsicElements["div"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
{
const __VLS_66 = __VLS_intrinsicElements["button"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{ onClick: {} as any, }, class: ("bg-teal-500 p-2 rounded mx-2 text-white hover:bg-gray-100 hover:text-teal-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("bg-teal-500 p-2 rounded mx-2 text-white hover:bg-gray-100 hover:text-teal-600"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
let __VLS_71 = { 'click': __VLS_pickEvent(__VLS_70['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_68>).onClick) };
__VLS_71 = {
click: $event => {
__VLS_ctx.getAllUsers();
// @ts-ignore
[getAllUsers,];
}
};
(__VLS_69.slots!).default;
}
(__VLS_64.slots!).default;
}
(__VLS_28.slots!).default;
}
{
const __VLS_72 = __VLS_intrinsicElements["table"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, class: ("w-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, class: ("w-full"), });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
{
const __VLS_77 = __VLS_intrinsicElements["thead"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
{
const __VLS_82 = __VLS_intrinsicElements["tr"];
const __VLS_83 = __VLS_elementAsFunctionalComponent(__VLS_82);
const __VLS_84 = __VLS_83({ ...{}, class: ("text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{}, class: ("text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
{
const __VLS_87 = __VLS_intrinsicElements["th"];
const __VLS_88 = __VLS_elementAsFunctionalComponent(__VLS_87);
const __VLS_89 = __VLS_88({ ...{}, class: ("px-4 py-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3"), });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
(__VLS_90.slots!).default;
}
{
const __VLS_92 = __VLS_intrinsicElements["th"];
const __VLS_93 = __VLS_elementAsFunctionalComponent(__VLS_92);
const __VLS_94 = __VLS_93({ ...{}, class: ("px-4 py-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3"), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
(__VLS_95.slots!).default;
}
{
const __VLS_97 = __VLS_intrinsicElements["th"];
const __VLS_98 = __VLS_elementAsFunctionalComponent(__VLS_97);
const __VLS_99 = __VLS_98({ ...{}, class: ("px-4 py-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3"), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
(__VLS_100.slots!).default;
}
{
const __VLS_102 = __VLS_intrinsicElements["th"];
const __VLS_103 = __VLS_elementAsFunctionalComponent(__VLS_102);
const __VLS_104 = __VLS_103({ ...{}, class: ("px-4 py-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
(__VLS_105.slots!).default;
}
{
const __VLS_107 = __VLS_intrinsicElements["th"];
const __VLS_108 = __VLS_elementAsFunctionalComponent(__VLS_107);
const __VLS_109 = __VLS_108({ ...{}, class: ("px-4 py-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_107, typeof __VLS_109> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3"), });
const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_107, __VLS_109)!;
let __VLS_111!: __VLS_NormalizeEmits<typeof __VLS_110.emit>;
(__VLS_110.slots!).default;
}
(__VLS_85.slots!).default;
}
(__VLS_80.slots!).default;
}
{
const __VLS_112 = __VLS_intrinsicElements["tbody"];
const __VLS_113 = __VLS_elementAsFunctionalComponent(__VLS_112);
const __VLS_114 = __VLS_113({ ...{}, class: ("bg-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_112, typeof __VLS_114> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), });
const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114)!;
let __VLS_116!: __VLS_NormalizeEmits<typeof __VLS_115.emit>;
for (const [user, index] of __VLS_getVForSourceType((__VLS_ctx.users.data)!)) {
{
const __VLS_117 = __VLS_intrinsicElements["tr"];
const __VLS_118 = __VLS_elementAsFunctionalComponent(__VLS_117);
const __VLS_119 = __VLS_118({ ...{}, class: ("text-gray-700"), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_117, typeof __VLS_119> & Record<string, unknown>) => void)({ ...{}, class: ("text-gray-700"), key: ((index)), });
const __VLS_120 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119)!;
let __VLS_121!: __VLS_NormalizeEmits<typeof __VLS_120.emit>;
{
const __VLS_122 = __VLS_intrinsicElements["td"];
const __VLS_123 = __VLS_elementAsFunctionalComponent(__VLS_122);
const __VLS_124 = __VLS_123({ ...{}, class: ("px-4 py-3 border"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_122, typeof __VLS_124> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3 border"), });
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
let __VLS_126!: __VLS_NormalizeEmits<typeof __VLS_125.emit>;
(index + 1);
(__VLS_125.slots!).default;
}
{
const __VLS_127 = __VLS_intrinsicElements["td"];
const __VLS_128 = __VLS_elementAsFunctionalComponent(__VLS_127);
const __VLS_129 = __VLS_128({ ...{}, class: ("px-4 py-3 border"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_127, typeof __VLS_129> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3 border"), });
const __VLS_130 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129)!;
let __VLS_131!: __VLS_NormalizeEmits<typeof __VLS_130.emit>;
(user.name);
(__VLS_130.slots!).default;
}
{
const __VLS_132 = __VLS_intrinsicElements["td"];
const __VLS_133 = __VLS_elementAsFunctionalComponent(__VLS_132);
const __VLS_134 = __VLS_133({ ...{}, class: ("px-4 py-3 text-ms font-semibold border"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_132, typeof __VLS_134> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3 text-ms font-semibold border"), });
const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134)!;
let __VLS_136!: __VLS_NormalizeEmits<typeof __VLS_135.emit>;
(user.email);
(__VLS_135.slots!).default;
}
{
const __VLS_137 = __VLS_intrinsicElements["td"];
const __VLS_138 = __VLS_elementAsFunctionalComponent(__VLS_137);
const __VLS_139 = __VLS_138({ ...{}, class: ("px-4 py-3 text-xs border"), }, ...__VLS_functionalComponentArgsRest(__VLS_138));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_137, typeof __VLS_139> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3 text-xs border"), });
const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_137, __VLS_139)!;
let __VLS_141!: __VLS_NormalizeEmits<typeof __VLS_140.emit>;
{
const __VLS_142 = __VLS_intrinsicElements["span"];
const __VLS_143 = __VLS_elementAsFunctionalComponent(__VLS_142);
const __VLS_144 = __VLS_143({ ...{}, class: ("px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_142, typeof __VLS_144> & Record<string, unknown>) => void)({ ...{}, class: ("px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"), });
const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144)!;
let __VLS_146!: __VLS_NormalizeEmits<typeof __VLS_145.emit>;
(user.roles[0].name);
(__VLS_145.slots!).default;
}
(__VLS_140.slots!).default;
}
{
const __VLS_147 = __VLS_intrinsicElements["td"];
const __VLS_148 = __VLS_elementAsFunctionalComponent(__VLS_147);
const __VLS_149 = __VLS_148({ ...{}, class: ("px-4 py-3 text-center text-sm border"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_147, typeof __VLS_149> & Record<string, unknown>) => void)({ ...{}, class: ("px-4 py-3 text-center text-sm border"), });
const __VLS_150 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149)!;
let __VLS_151!: __VLS_NormalizeEmits<typeof __VLS_150.emit>;
{
const __VLS_152 = __VLS_intrinsicElements["div"];
const __VLS_153 = __VLS_elementAsFunctionalComponent(__VLS_152);
const __VLS_154 = __VLS_153({ ...{}, class: ("relative inline-block text-left"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_152, typeof __VLS_154> & Record<string, unknown>) => void)({ ...{}, class: ("relative inline-block text-left"), });
const __VLS_155 = __VLS_pickFunctionalComponentCtx(__VLS_152, __VLS_154)!;
let __VLS_156!: __VLS_NormalizeEmits<typeof __VLS_155.emit>;
{
const __VLS_157 = __VLS_intrinsicElements["button"];
const __VLS_158 = __VLS_elementAsFunctionalComponent(__VLS_157);
const __VLS_159 = __VLS_158({ ...{ onClick: {} as any, }, class: ("px-2 py-1 rounded-md bg-gray-200 hover:bg-teal-500 hover:text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_158));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_157, typeof __VLS_159> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("px-2 py-1 rounded-md bg-gray-200 hover:bg-teal-500 hover:text-white"), });
const __VLS_160 = __VLS_pickFunctionalComponentCtx(__VLS_157, __VLS_159)!;
let __VLS_161!: __VLS_NormalizeEmits<typeof __VLS_160.emit>;
let __VLS_162 = { 'click': __VLS_pickEvent(__VLS_161['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_158, typeof __VLS_159>).onClick) };
__VLS_162 = {
click: $event => {
__VLS_ctx.toggleDropdown(user.id);
// @ts-ignore
[users, toggleDropdown,];
}
};
{
const __VLS_163 = __VLS_intrinsicElements["svg"];
const __VLS_164 = __VLS_elementAsFunctionalComponent(__VLS_163);
const __VLS_165 = __VLS_164({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("0.8"), stroke: ("currentColor"), class: ("w-4 h-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_164));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_163, typeof __VLS_165> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("0.8"), stroke: ("currentColor"), class: ("w-4 h-4"), });
const __VLS_166 = __VLS_pickFunctionalComponentCtx(__VLS_163, __VLS_165)!;
let __VLS_167!: __VLS_NormalizeEmits<typeof __VLS_166.emit>;
{
const __VLS_168 = __VLS_intrinsicElements["path"];
const __VLS_169 = __VLS_elementAsFunctionalComponent(__VLS_168);
const __VLS_170 = __VLS_169({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"), }, ...__VLS_functionalComponentArgsRest(__VLS_169));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_168, typeof __VLS_170> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"), });
const __VLS_171 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170)!;
let __VLS_172!: __VLS_NormalizeEmits<typeof __VLS_171.emit>;
}
(__VLS_166.slots!).default;
}
(__VLS_160.slots!).default;
}
if (__VLS_ctx.openDropdown === user.id) {
{
const __VLS_173 = __VLS_intrinsicElements["div"];
const __VLS_174 = __VLS_elementAsFunctionalComponent(__VLS_173);
const __VLS_175 = __VLS_174({ ...{}, class: ("origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"), }, ...__VLS_functionalComponentArgsRest(__VLS_174));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_173, typeof __VLS_175> & Record<string, unknown>) => void)({ ...{}, class: ("origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"), });
const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175)!;
let __VLS_177!: __VLS_NormalizeEmits<typeof __VLS_176.emit>;
{
const __VLS_178 = __VLS_intrinsicElements["a"];
const __VLS_179 = __VLS_elementAsFunctionalComponent(__VLS_178);
const __VLS_180 = __VLS_179({ ...{}, href: ("#"), class: ("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_179));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_180> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"), });
const __VLS_181 = __VLS_pickFunctionalComponentCtx(__VLS_178, __VLS_180)!;
let __VLS_182!: __VLS_NormalizeEmits<typeof __VLS_181.emit>;
{
const __VLS_183 = __VLS_intrinsicElements["i"];
const __VLS_184 = __VLS_elementAsFunctionalComponent(__VLS_183);
const __VLS_185 = __VLS_184({ ...{}, class: ("fi fi-rr-settings"), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, class: ("fi fi-rr-settings"), });
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
let __VLS_187!: __VLS_NormalizeEmits<typeof __VLS_186.emit>;
}
(__VLS_181.slots!).default;
}
{
const __VLS_188 = __VLS_intrinsicElements["a"];
const __VLS_189 = __VLS_elementAsFunctionalComponent(__VLS_188);
const __VLS_190 = __VLS_189({ ...{}, href: ("#"), class: ("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_188, typeof __VLS_190> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"), });
const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190)!;
let __VLS_192!: __VLS_NormalizeEmits<typeof __VLS_191.emit>;
(__VLS_191.slots!).default;
}
(__VLS_176.slots!).default;
}
// @ts-ignore
[openDropdown,];
}
(__VLS_155.slots!).default;
}
(__VLS_150.slots!).default;
}
(__VLS_120.slots!).default;
}
}
(__VLS_115.slots!).default;
}
(__VLS_75.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_193 = __VLS_intrinsicElements["div"];
const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
const __VLS_195 = __VLS_194({ ...{}, class: ("flex justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_193, typeof __VLS_195> & Record<string, unknown>) => void)({ ...{}, class: ("flex justify-end"), });
const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195)!;
let __VLS_197!: __VLS_NormalizeEmits<typeof __VLS_196.emit>;
{
const __VLS_198 = ({} as 'Pagination' extends keyof typeof __VLS_ctx ? { 'pagination': typeof __VLS_ctx.Pagination; } : 'pagination' extends keyof typeof __VLS_ctx ? { 'pagination': typeof __VLS_ctx.pagination; } : typeof __VLS_resolvedLocalAndGlobalComponents).pagination;
const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{ onFetchDataFrom: {} as any, }, links: ((__VLS_ctx.users.links)), }));
({} as { pagination: typeof __VLS_198; }).pagination;
({} as { pagination: typeof __VLS_198; }).pagination;
const __VLS_200 = __VLS_199({ ...{ onFetchDataFrom: {} as any, }, links: ((__VLS_ctx.users.links)), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_198, typeof __VLS_200> & Record<string, unknown>) => void)({ ...{ onFetchDataFrom: {} as any, }, links: ((__VLS_ctx.users.links)), });
const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200)!;
let __VLS_202!: __VLS_NormalizeEmits<typeof __VLS_201.emit>;
let __VLS_203 = { 'fetchDataFrom': __VLS_pickEvent(__VLS_202['fetchDataFrom'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_200>).onFetchDataFrom) };
__VLS_203 = {
fetchDataFrom: $event => {
__VLS_ctx.getNextPage($event);
// @ts-ignore
[users, users, users, getNextPage,];
}
};
}
(__VLS_196.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_204 = __VLS_intrinsicElements["div"];
const __VLS_205 = __VLS_elementAsFunctionalComponent(__VLS_204);
const __VLS_206 = __VLS_205({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
{
const __VLS_209 = ({} as 'Edit' extends keyof typeof __VLS_ctx ? { 'edit': typeof __VLS_ctx.Edit; } : 'edit' extends keyof typeof __VLS_ctx ? { 'edit': typeof __VLS_ctx.edit; } : typeof __VLS_resolvedLocalAndGlobalComponents).edit;
const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{}, datas: ((__VLS_ctx.roles)), }));
({} as { edit: typeof __VLS_209; }).edit;
({} as { edit: typeof __VLS_209; }).edit;
const __VLS_211 = __VLS_210({ ...{}, datas: ((__VLS_ctx.roles)), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_209, typeof __VLS_211> & Record<string, unknown>) => void)({ ...{}, datas: ((__VLS_ctx.roles)), });
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
let __VLS_213!: __VLS_NormalizeEmits<typeof __VLS_212.emit>;
}
(__VLS_207.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[roles, roles, roles,];
return __VLS_slots;
}
