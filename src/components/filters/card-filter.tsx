"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn-ui/card'
import { Button } from '@/components/shadcn-ui/button'
import { Label } from '@/components/shadcn-ui/label'
import { Funnel, FunnelX } from 'lucide-react'
import { Checkbox } from '@/components/shadcn-ui/checkbox'
import { useQueryState } from 'nuqs'

const LIEUX = [
    { label: 'Espaces verts', value: 'espaces-verts' },
    { label: 'Équipements', value: 'equipements' },
    { label: 'Fontaines', value: 'fontaines' },
]

const PRIX = [
    { label: 'Gratuit', value: 'gratuit' },
    { label: 'Tarif réduit', value: 'tarif-reduit' },
    { label: 'Payant', value: 'payant' },
]

const USAGES = [
    { label: 'Sport', value: 'sport' },
    { label: 'Détente', value: 'detente' },
    { label: 'Famille', value: 'famille' },
    { label: 'Travail', value: 'travail' },
]

const ARRONDISSEMENTS = [
    { label: '1er', value: '1' },
    { label: '2e', value: '2' },
    { label: '3e', value: '3' },
    { label: '4e', value: '4' },
    { label: '5e', value: '5' },
    { label: '6e', value: '6' },
    { label: '7e', value: '7' },
    { label: '8e', value: '8' },
    { label: '9e', value: '9' },
    { label: '10e', value: '10' },
    { label: '11e', value: '11' },
    { label: '12e', value: '12' },
    { label: '13e', value: '13' },
    { label: '14e', value: '14' },
    { label: '15e', value: '15' },
    { label: '16e', value: '16' },
    { label: '17e', value: '17' },
    { label: '18e', value: '18' },
    { label: '19e', value: '19' },
    { label: '20e', value: '20' },
]

export default function FilterCard() {

    const [place, setPlace] = useQueryState("place", {
        defaultValue: "",
        shallow: false,
    })

    const [price, setPrice] = useQueryState("price", {
        defaultValue: "",
        shallow: false,
    })

    const [usage, setUsage] = useQueryState("usage", {
        defaultValue: "",
        shallow: false,
    })

    const [arrondissement, setArrondissement] = useQueryState("arrondissement", {
        defaultValue: "",
        shallow: false,
    })

    const handleFilterChange = (
        currentValue: string,
        setValue: (value: string) => void,
        filterValue: string,
        checked: boolean
    ) => {
        const currentFilters = currentValue ? currentValue.split(',') : []

        if (checked) {
            if (!currentFilters.includes(filterValue)) {
                const newFilters = [...currentFilters, filterValue]
                setValue(newFilters.join(','))
            }
        } else {
            const newFilters = currentFilters.filter(f => f !== filterValue)
            setValue(newFilters.length > 0 ? newFilters.join(',') : '')
        }
    }

    const isFilterChecked = (currentValue: string, filterValue: string) => {
        const currentFilters = currentValue ? currentValue.split(',') : []
        return currentFilters.includes(filterValue)
    }

    function FilterSection({
        title,
        filters,
        currentValue,
        cols,
        setValue
    }: {
        title: string
        filters: { label: string, value: string }[]
        currentValue: string
        cols?: number
        setValue: (value: string) => void
    }) {
        return (
            <div className="flex flex-col gap-2">
                <h3>{title}</h3>
                <div className={`grid grid-cols-${cols} gap-2`}>
                    {filters.map((filter) => (
                        <div key={filter.value} className="flex gap-2">
                            <Checkbox
                                id={filter.value}
                                checked={isFilterChecked(currentValue, filter.value)}
                                onCheckedChange={(checked) =>
                                    handleFilterChange(currentValue, setValue, filter.value, checked as boolean)
                                }
                            />
                            <Label htmlFor={filter.value}>{filter.label}</Label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Funnel size={16} />
                    Filtres
                </CardTitle>
                <Button
                    onClick={() => {
                        setPlace("")
                        setPrice("")
                        setUsage("")
                        setArrondissement("")
                    }}
                    className="cursor-pointer"
                >
                    <FunnelX />
                    Réinitialiser les filtres
                </Button>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4">
                <FilterSection
                    title="Lieu"
                    filters={LIEUX}
                    currentValue={place}
                    setValue={setPlace}
                />
                <FilterSection
                    title="Prix"
                    filters={PRIX}
                    currentValue={price}
                    setValue={setPrice}
                />
                <FilterSection
                    title="Usage"
                    filters={USAGES}
                    currentValue={usage}
                    setValue={setUsage}
                />
                <FilterSection
                    title="Arrondissement"
                    filters={ARRONDISSEMENTS}
                    currentValue={arrondissement}
                    cols={2}
                    setValue={setArrondissement}
                />
            </CardContent>
        </Card>
    )
}