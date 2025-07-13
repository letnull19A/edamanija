import { Menu } from 'primereact/menu'
import style from './style.module.css'

export default function SideMenu() {
  const items = [
    {
      label: 'Категории',
      items: [
        {
          label: 'Список',
          icon: 'pi pi-search',
        },
        {
          label: 'Добавить',
          icon: 'pi pi-plus',
        },
      ],
    },
    {
      label: 'Пользователи',
      items: [
        {
          label: 'Список',
          icon: 'pi pi-cog',
        },
      ],
    },
    {
      label: 'Продукция',
      items: [
        {
          label: 'Список',
          icon: 'pi pi-cog',
        },
        {
          label: 'Добавить',
          icon: 'pi pi-plus',
        },
      ],
    },
    {
      label: 'Партнёры',
      items: [
        {
          label: 'Список',
          icon: 'pi pi-cog',
        },
        {
          label: 'Добавить',
          icon: 'pi pi-plus',
        },
      ],
    },
    {
      label: 'Скидки и промокоды',
      items: [
        {
          label: 'Список',
          icon: 'pi pi-cog',
        },
        {
          label: 'Добавить',
          icon: 'pi pi-plus',
        },
      ],
    },
  ]

  return (
    <div className={style.sideMenu}>
      <Menu className={style.sideMenuContent} model={items} />
    </div>
  )
}
