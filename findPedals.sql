SELECT s.id, s.name, s.type
FROM schematics s
WHERE not exists (
SELECT *
FROM schematic_components sc
LEFT JOIN user_components uc
ON uc.component_id = sc.component_id
WHERE sc.schematic_id = s.id
AND (uc.user_email = 'test' OR uc.user_email IS NULL)
AND (uc.user_component_count < sc.schematic_component_count OR uc.user_component_count is NULL));